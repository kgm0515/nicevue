# vue 组件库 @nicevue/ui

这是一个基于 vue 的 ui 组件库

欢迎使用 @nicevue/ui 组件库! `@nicevue/ui` 是基于 Vue 开发的组件库

## 特性

- 开箱即用的高质量 Vue 组件。
- 使用 TypeScript 开发，提供完整的类型定义文件。
- 制止组件和样式按需加载

## 安装

使用 npm 或 yarn 安装

我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```sh
$ npm install @nicevue/ui --save
$ yarn add @nicevue/ui
```

## 示例

全局引入

```ts
/** ./src/mian.ts */
import NiceVue from '@nicevue/ui'
import '@nicevue/ui/dist/style/index.css' // 引入全局样式
createApp(App).use(NiceVue).mount('#app')

/** ./src/App.tsx */
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return () => <nice-button type="primary">add</nice-button>
  }
})
```

按需引入

```ts
/** ./src/mian.ts */
import '@nicevue/ui/dist/style/base.css' // 按需引入-引入基础样式
createApp(App).use(NiceVue).mount('#app')

/** ./src/App.tsx */
import { defineComponent, ref } from 'vue'
import { Button } from '@nicevue/ui' // 按需引入-引入按钮组件
import '@nicevue/ui/dist/style/theme/button.css' // 按需引入-引入按钮样式

export default defineComponent({
  components: { NiceButton: Button },
  setup() {
    return () => {
      return (
        <div class="wrap">
          <nice-button type="primary"></nice-button>
          <Button type="success">add</Button>
        </div>
      )
    }
  }
})
```
