/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-29 16:18:09
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueMdx from '@nicevue/mdx'
import { genRoute } from './scripts/genRoute'

// https://vitejs.dev/config/
export default () => {
  genRoute()
  return defineConfig({
    plugins: [vueMdx(), vue(), vueJsx({ include: /\.(mdx|md|jsx|tsx)/ })]
  })
}
