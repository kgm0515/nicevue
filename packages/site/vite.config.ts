/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-30 10:37:21
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueMdx from '@nicevue/mdx'
// import { genRoute } from './scripts/genRoute'

// https://vitejs.dev/config/
export default (options) => {
  // genRoute()
  // const isDev = options.command === 'serve'  // dev 独有配置
  const isProd = options.command === 'build' // dev 独有配置
  return defineConfig({
    base: isProd ? '/nicevue/' : '',
    plugins: [vueMdx(), vue(), vueJsx({ include: /\.(mdx|md|jsx|tsx)/ })]
  })
}
