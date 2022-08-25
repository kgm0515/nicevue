## 包管理工具 pnpm

https://gitee.com/kgm0515/vue3-comps/tree/master/packages/ui

为什么使用 pnpm(https://pnpm.io/)

- 包安装速度极快
- 磁盘空间利用率高
- monorepo：天然内置支持当仓库多包

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

## ui 组件库

初始化 ui 组件库`npm init -y `

修改 pacakege.json

```json
{ "name": "@nicevue/ui" }
```
