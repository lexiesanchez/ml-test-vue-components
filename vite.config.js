import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      vue: path.resolve('./node_modules/vue'),
    },
    dedupe: ['vue'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'LsTestComp',
      fileName: (format) => `ls-test-comp.${format}.js`
    },
  },
  rollupOptions: {
    external: ['vue'],
    output: {
      globals: {
        vue: 'Vue'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/css/variables.scss";
        `,
      },
    },
  },
  plugins: [
    vue(),
    peerDepsExternal()
	],
})
