import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  test:{
    exclude: [...configDefaults.exclude, 'packages/template/*'],
    globals:true,
    environment: 'happy-dom',
  },
  plugins: [vue()],
  resolve: { 
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    }
  },
  envPrefix: 'APP_'

})
