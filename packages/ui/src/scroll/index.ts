/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 14:41:41
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-26 14:55:07
 */
import type { App, Plugin } from 'vue'
import Scroll from './scroll.vue'

Scroll.install = (app: App) => {
  app.component(Scroll.name, Scroll)
  return app
}

export default Scroll as typeof Scroll & Plugin
