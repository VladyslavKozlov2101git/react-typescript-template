import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default () => {
  return defineConfig({
    plugins: [react()],
    base: '/',

    resolve: {
      alias: {
        '@': '/src',
        '@redux': '/src/redux',
        '@models': '/src/models',
        '@shared': '/src/shared',
        '@assets': '/src/assets',
        '@helpers': '/src/helpers',
        '@layouts': '/src/layouts',
        '@features': '/src/features',
        '@containers': '/src/containers',
      },
    },
  });
};
