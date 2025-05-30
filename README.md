| Type         | Description |
| ------------ | ----------- |
| Node version | 1. 22.11.0   |
|              |             |
| Design link  |             |
| SWAGGER      |             |
|              |             |
|              |             |

Useful lessons

| Topic           | Description                                 |
| --------------- | ------------------------------------------- |
| StoryBook       | https://www.youtube.com/watch?v=dwtmz5PHWDg |
|                 |                                             |
| Husky/Prettier  | https://www.youtube.com/watch?v=her8rL3So-U |
|                 |                                             |
| UNIT TESTS      | https://www.youtube.com/watch?v=iIMaFgeNzc8 |
|                 |                                             |
| Design Patterns | https://importreact.beehiiv.com/            |

📁 Project Structure

| Path                 | Description                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **`/app`**           | Redux store setup and root-level configurations (e.g., providers, state initialization). |
| **`/assets`**        | Static assets such as images, icons, and styles.                                         |
| ├── `icons/`         | SVG or React-based icons.                                                                |
| └── `styles/`        | Global styles (CSS/SCSS, Tailwind, etc.).                                                |
| **`/components`**    | Presentational (dumb) components with little to no logic. Reusable UI pieces.            |
| **`/containers`**    | Smart components that handle logic, data fetching, and connect to state.                 |
| ├── `AuthContainer/` | Container for authentication logic/UI.                                                   |
| └── `MainContainer/` | Main layout or feature container.                                                        |
| **`/helpers`**       | Utility functions, custom hooks, and shared variables/constants.                         |
| ├── `functions.ts`   | General-purpose helper functions.                                                        |
| ├── `hooks.ts`       | Custom React hooks.                                                                      |
| └── `vars.ts`        | Reusable variables and constants.                                                        |
| **`/layouts`**       | Layout components used across pages, like headers and footers.                           |
| ├── `Footer/`        | Footer component and logic.                                                              |
| └── `Header/`        | Header component and logic.                                                              |
| **`/pages`**         | Page components that map to application routes.                                          |
| **`/redux`**         | Traditional Redux slices created with `createSlice`. Used for non-API global state.      |
| **`/routes`**        | Application routing configuration (e.g., React Router).                                  |
| **`/services`**      | RTK Query API slices created via `createApi`. Manages API communication and caching.     |
| └── `cachedAPI.tsx`  | An RTK Query API service definition.                                                     |
| **`/shared`**        | Shared components, constants, types, etc., used across the project.                      |
| **`/stories`**       | Storybook stories for UI components.                                                     |
| **`/tests`**         | Unit, integration, or e2e tests (Jest, React Testing Library, etc.).                     |
| **`/types`**         | Global TypeScript types and interfaces.                                                  |
