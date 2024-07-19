import react from '@vitejs/plugin-react';

import { defineConfig } from 'vitest/config';

export default () => {
  return defineConfig({
    plugins: [react()],
    base: '/',
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup',
    },
    resolve: {
      alias: {
        '@': '/src',
        '@redux': '/src/redux',
        '@models': '/src/models',
        '@shared': '/src/shared',
        '@assets': '/src/assets',
        '@helpers': '/src/helpers',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@containers': '/src/containers',
      },
    },
  });
};
