import DefaultTheme from 'vitepress/theme'
// import NiceVue from '../../../../ui/src/index'
import '../../../../ui/style/index.less'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    // ctx.app.use(NiceVue)
    // ctx.app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
