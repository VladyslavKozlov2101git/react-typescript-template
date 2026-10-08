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

## Formatting

`oxfmt` is the formatter for JS/TS (double quotes). `prettier` is for `.scss`/`.json` only — note `.prettierrc` sets `singleQuote: true`, so never run `prettier` over `src/**/*.tsx` or it will fight oxfmt across the whole repo.
