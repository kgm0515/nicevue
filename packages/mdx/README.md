# vite 插件 @nicevue/mdx

这是一个用于将.md 文件转化为 jsx 组件的 vite 插件

## 特性

- 支持将.md 文件转化为 jsx 组件

## 安装

使用 npm 或 yarn 安装

```sh
$ npm install @nicevue/mdx --save
$ yarn add @nicevue/mdx
```

## 示例

全局引入

```ts
/** vite.config.ts */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueMdx from '@nicevue/mdx'

export default (options) => {
  return defineConfig({
    plugins: [vueMdx(), vue(), vueJsx({ include: /\.(mdx|md|jsx|tsx)/ })]
  })
}
```
