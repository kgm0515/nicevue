## 包管理工具 pnpm

使用场景

- 当前项目较复杂，存在比较多的公共组件、方法、参数、样式等且这些文件有可能在另外的项目中也可能使用到情况。
- 通过 monorepo 架构，可以很容易抽离这些代码到单独的项目，供本项目和其他项目使用。
- monorepo 中的每一个子仓库可以独立开发，独立打包和发布；子仓库之前相互引用也很方便。

为什么使用 pnpm(https://pnpm.io/)

- 包安装速度极快
- 磁盘空间利用率高
- monorepo：方便版本管理，天然内置支持当仓库多包, 相互引用方便。

安装 pnpm

```sh
npm i pnpm -g # 安装依赖
pnpm --help # 帮助文档
npm init -y # 项目初始化
# 安装vue/vite
pnpm i typescript vite -D -w
pnpm i vue -w
```

## 初始化项目

创建配置文件`./pnpm-workspace.yaml`

```yaml
packages:
  # all packages in subdirs of packages/ and components/
  - 'packages/**'
```

创建文件`./.prettierrc`

```.prettierrc
{
  "printWidth": 250,
  "semi": false,
  "arrowParens": "always",
  "singleQuote": true,
  "endOfLine": "auto",
  "vueIndentScriptAndStyle": true,
  "trailingComma": "none"
}
```

## 实现一个 utils 子仓库并引入

### 创建子仓库 utils

创建项目`/packages/utils`,并`npm init -y`初始化仓库

修改`/packages/utils/packeges.json`

```json
{
  "name": "@nicevue/utils",
  "version": "1.0.0",
  "main": "index.js"
}
```

创建文件`/packages/utils/index.js`

```js
export default {
  log() {
    console.log('this is log')
  }
}
```

### 在同级别子仓库中使用

在`@nicevue/site`仓库中引入

```js
// ...
import utils from '@nicevue/utils'
console.log(utils)
// ...
```

- 运行后发现报错了。现在安装依赖`pnpm i @nicevue/utils`, 运行成功。查看`@nicevue/site/package.json`新增了一行依赖

```json
{
  "dependencies": {
    "@nicevue/utils": "workspace:^1.0.0"
  }
}
```

- 在`@nicevue/site`仓库下的 node_module 下出现了`@nicevue/utils`的目录，里面的内容与`utils`子仓库一模一样，并且修改任何一方都会立即更新另一方的内容。

- 这就支持了仓库多包

## 多仓库实现流程和原理

### 用 js 创建软连接

创建测试目录`./example/testlink`，在测试目录下创建文件`./target/index.txt`

创建测试脚本文件

```js
/** ./example/testlink/script.js */
const path = require('path')
const fs = require('fs')
/**
 * 创建某一个目录(是创建目录，不是文件)的软连接
 * target 目标文件
 * path 创建软链对应的地址
 */
fs.symlink(path.resolve(__dirname + '/target/'), path.resolve(__dirname + '/test'), (err) => {
  console.log('error', err)
})
```

以管理员身份运行命令行窗口并执行脚本：

- 结果在`testlink`目录下创建了`test`目录，并且此目录下所有文件和`target`目录一模一样
- 修改或者删除`test`目录下的文件，同样会修改或者删除`target`目录下的文件
- 打开文件目录，可以看到`test`目录其实以一个快捷方式

### pnpm 支持多仓库原理

当前我们在 pnpm 项目下执行`pnpm i`安装依赖的时候，流程如下

- 读取`package.json`文件，一次安装依赖
- 判断当前正在安装的依赖是否带有"workspace:^", 如果是(要安装的是内部子仓库)，那么就在 node_modules 下面创建`@nicevue`目录，同时在该目录下创建指向当前子仓库的软链接
- 如果要安装的不是内部子仓库，会去当前计算机的一个缓存地址去查找是否已经依赖，
  1. 如果不存在就在缓存目录中安装该依赖
- 在 node_modules 下面创建指向当缓存目录张目标依赖的软链接

这也是 pnpm 为什么安装依赖这么快并且磁盘空间利用率高的原因之一
