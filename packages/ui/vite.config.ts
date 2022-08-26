/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:45:34
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-26 17:34:05
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({ include: /\.(mdx|md|jsx|tsx)/ }), dts({ entryRoot: 'src', outputDir: 'types' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'NiceVue',
      fileName: 'nicevue'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' } // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      }
      // output: [
      //   // 配置了这个output，上面配置的lib就没用了
      //   { format: 'es', dir: './dist/es', entryFileNames: '[name].js', preserveModules: true, preserveModulesRoot: 'src' },
      //   { format: 'umd', dir: './dist', entryFileNames: 'index.umd.cjs', name: 'NiceVue' }
      // ]
    }
  }
})
