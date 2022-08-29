/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-29 15:34:02
 */
import { createApp } from 'vue'
import App from './App'
import './style/mdx.less'
import './style/main.less'
/** 生产模式 */
// import NiceVue from '@nicevue/ui' // 引入全局组件
// import '@nicevue/ui/dist/style/index.css' // 引入全局样式
// import '@nicevue/ui/dist/style/base.css' // 按需引入-引入基础样式

/** 开发模式 */
import NiceVue from '../../ui/src' // 引入全局组件
import '../../ui/style/index.less' // 引入全局样式

createApp(App).use(NiceVue).mount('#app')
