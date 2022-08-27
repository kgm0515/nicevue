/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-27 10:03:32
 */
import { createApp } from 'vue'
import App from './App'
import NiceVue from '@nicevue/ui'
import '@nicevue/ui/dist/style/index.css'

createApp(App).use(NiceVue).mount('#app')
