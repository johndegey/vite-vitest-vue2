import {fileURLToPath, URL} from 'node:url';
import Components from 'unplugin-vue-components/vite';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  if(configEnv.mode === 'test') {
    return {
      plugins: [
        vue(),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
          vue: 'vue/dist/vue.runtime.mjs',
        },
      },
      test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./tests/setup.js'],
      },
    };
  }

  return {
    plugins: [
      vue(),
      Components(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
