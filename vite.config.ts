import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon')
        }
      }
    }),
    VueRouter(),
    AutoImport({
      /* Options */
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router'
      ],
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: true,
      // Include auto-imported packages in Vite's `optimizeDeps` options
      // Recommend to enable
      viteOptimizeDeps: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
