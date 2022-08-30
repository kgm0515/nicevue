# 组件库文档部署

### 登陆 npm

```sh
npm adduser # 输入用户名密码邮箱
npm login #输入用户名和密码和 Email, kgm0515、kgm1...、498413945@qq.com
```

### 包发布

每一个子包需要单独发布。发布前先整理每一个子包下面的 package.json 文件, 以@nicevue/ui 子仓库为例

```json
{
  "name": "@nicevue/ui",
  "private": false,
  "version": "1.0.2",
  "files": ["dist","types","package.json"],
  "main": "./dist/index.umd.js",
  "module": "./dist/es/index.js",
  "exports": {
    ".": { "import": "./dist/es/index.js", "require": "./dist/index.umd.js" },
    "./dist/*": "./dist/*"
  },
  "types": "types/index.d.ts",
  "scripts": {
  +  "pub": "npm publish"
  },
  "repository": { "type": "git", "url": "git+https://github.com/kgm0515/nicevue.git" },
  "keywords": [ "@nicevue/ui", "vue组件库" ],
  "author": "kgm0515",
  "devDependencies": {
  }
}

```

父仓库的 package.json

```json
{
  "scripts": {
    + "pub": "npm run pub:mdx && npm run pub:ui && npm run pub:cli",
    + "pub:mdx": "cd ./packages/mdx && pnpm pub",
    + "pub:ui": "cd ./packages/ui && pnpm pub",
    + "pub:cli": "cd ./packages/cli && pnpm pub"
  }
}
```

运行`npm run pub`发布所有子仓库，发布器必须先提交所有代码
