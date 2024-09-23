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
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
        '@app': '/src/app',
        '@components': '/src/components',
        '@redux': '/src/redux',
        '@models': '/src/models',
        '@shared': '/src/shared',
        '@assets': '/src/assets',
        '@routes': '/src/routes/paths',
        '@helpers': '/src/helpers',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@containers': '/src/containers',
      },
    },
  });
};
