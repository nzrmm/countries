import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Component from 'unplugin-vue-components/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      Component({
         include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
   ],
   resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
   },
});
