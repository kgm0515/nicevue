/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 14:41:41
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-26 14:42:05
 */
import type { App, Plugin } from 'vue'
import Button from './button'

Button.install = (app: App) => {
  app.component(Button.name, Button)
  return app
}

export default Button as typeof Button & Plugin
