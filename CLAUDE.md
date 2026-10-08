# Project rules

React 19.3 / TypeScript 7 / Vite 8 / React Router 8. Node >= 22.22.

## Use the platform, not a dependency

Before adding a package, check React covers it:

| Need                                | Use                                                                 | Not                      |
| ----------------------------------- | ------------------------------------------------------------------- | ------------------------ |
| `<title>`, `<meta>`, `<link>`       | Render them inline in any component — React hoists them to `<head>` | `react-helmet-async`     |
| Reading a promise/context in render | `use()`                                                             | custom resolver hooks    |
| Form pending state                  | `useFormStatus`, `useActionState`                                   | manual `isLoading` state |
| Optimistic UI                       | `useOptimistic`                                                     | hand-rolled rollback     |
| Stylesheet / script loading         | `<link rel="stylesheet" precedence>`, `<script async>`              | loader libs              |

## React 19.2+ APIs to prefer

- **`useEffectEvent`** — when an effect needs a callback's latest value but must not re-subscribe on it. Put the callback in `useEffectEvent`, keep it out of the dep array. See `useOnClickOutside` in [hooks.ts](src/helpers/hooks.ts).
- **`<Activity mode="hidden">`** — to keep a tab/panel mounted with its state and DOM while hidden, instead of unmounting or `display: none` hacks. Effects unmount; state survives.
- **`<ViewTransition>`** (stable in 19.3) — for route and list transitions. Wrap the transitioning element, animate via `::view-transition-*` CSS. Don't reach for an animation library first.
- **Fragment refs** (stable in 19.3) — a ref on `<Fragment>` to observe/measure a group of children without an extra wrapper `<div>`.
- **`useDeferredValue`** — already demoed in [UseDeferredValueExample.tsx](src/shared/UseDeferredValueExample/UseDeferredValueExample.tsx).

## Gotchas in this stack

- **Imports**: `react-router-dom` no longer exists. Core APIs from `react-router`; only `RouterProvider`/`HydratedRouter` from `react-router/dom`.
- **ky 2**: hooks take one state object (`({ request, options }) => ...`), the option is `prefix` (not `prefixUrl`), and error bodies are pre-consumed into `error.data` — `error.response.json()` will not work.
- **TypeScript 7**: no `baseUrl`. `paths` entries are relative to the tsconfig that declares them. TS 7 ships without the compiler API, so don't add tooling that needs it (`typescript-eslint`, `ts-morph`, `tsup --dts`).
- **Vitest 5**: mocks are cleared before every test by default. `vi.mock`/`vi.hoisted` must be top-level, never inside `describe`. Always `await` async assertions.
- **Vite 8**: `build.rollupOptions` is now `build.rolldownOptions`, `esbuild` is now `oxc`.

## Security (OWASP)

oxlint has **no** security plugin. `eslint-plugin-security` is not worth adding: its 14 rules are Node-oriented (`child_process`, `fs` paths, `Buffer`) and the one that fires in app code, `detect-object-injection`, is almost pure false positives. What covers a browser SPA is below.

**A03 — Injection / XSS.** Enforced as errors in `.oxlintrc.json`, not warnings, so they fail `npm run lint`: `react/no-danger`, `react/no-danger-with-children`, `react/jsx-no-script-url`, `react/jsx-no-target-blank`, `no-eval`, `no-implied-eval`, `no-new-func`, `no-script-url`. Never add `dangerouslySetInnerHTML` — if HTML really must be rendered, sanitize server-side and justify it in review.

**A05 — Misconfiguration.**

- Every `VITE_*` variable is inlined into the public bundle at build time. A secret in `.env` is a published secret. API keys, tokens and credentials belong on the server; the browser only ever gets a URL.
- Security headers live in [conf/dev.nginx](conf/dev.nginx). Tighten `connect-src` to the real API origins and add HSTS once the vhost is on TLS.
- The CSP has no `'unsafe-inline'` for `script-src`. Keep it that way — it is the thing that makes an XSS unexploitable.

**A07 — Auth.** The template reads the session token with `js-cookie` (`Cookies.get("token")` in [api.ts](src/services/api.ts), [routes.tsx](src/routes/routes.tsx), both containers). A cookie readable from JS is a cookie stealable by any XSS. The correct shape is: the server sets `HttpOnly; Secure; SameSite=Lax`, the frontend never reads the token, and `ky` sends it with `credentials: "include"` instead of an `Authorization` header. Do not add new code that reads the token from JS.

**A06 — Vulnerable dependencies.** Gate on production deps only:

```sh
npm audit --omit=dev --audit-level=high
```

Currently clean. Do not wrap this in an npm script — npm 12 rejects a nested `npm audit` in project-scoped installs (`EALLOWSCRIPTS`); call it directly from CI. The outstanding high-severity advisories are all transitive under `plop`, a dev-only scaffolding CLI, and `npm audit fix --force` would downgrade it to v2 — not worth it.

**A09 — Logging.** Never `console.log` a token, a full request header set, or a user record.

## Formatting

`oxfmt` is the formatter for JS/TS (double quotes). `prettier` is for `.scss`/`.json` only — note `.prettierrc` sets `singleQuote: true`, so never run `prettier` over `src/**/*.tsx` or it will fight oxfmt across the whole repo.
