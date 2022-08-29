/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-29 09:09:38
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueMdx from '@nicevue/mdx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueMdx(), vue(), vueJsx({ include: /\.(mdx|md|jsx|tsx)/ })]
})
