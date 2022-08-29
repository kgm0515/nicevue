# 开发一个 cli 工具

现在组件库和组件库文档项目已经完成，但是我们发现在开发一个组件的时候还是挺麻烦的。应为组件是一个文件夹，里面有不同的文件还有比较固定的文件格式。

在这里我会写一个简单的 cli 工具，辅助我们创建一个组件模板

## 准备工作

创建一个`@nicevue/cli`子仓库，并初始化

package.json

```json
{
  "name": "@nicevue/cli",
  "version": "1.0.0",
  "description": "",
  "bin": { "nicevue": "./lib/index.js" },
  "files": ["lib", "package.json"],
  "scripts": {
    "dev": "tsc --watch",
    "build": "rimraf ./lib/index.js && tsc"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chalk": "^4.0.1",
    "commander": "^9.2.0",
    "fs-extra": "^10.1.0",
    "ora": "5.4.0"
  },
  "devDependencies": {
    "@types/fs-extra": "^9.0.13"
  }
}
```

tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./lib",
    "target": "es5",
    "strict": true,
    "downlevelIteration": true,
    "declaration": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "jsx": "preserve",
    "lib": ["esnext", "dom"]
  },
  "include": ["src/**/*"]
}
```

## 一个简单的 cli 命令

创建文件./src/index.ts

```ts
#!/usr/bin/env node
import { Command } from 'commander'
import { resolve } from 'path'

const program = new Command()
program.version(`nicevue 1.0.0`).usage(`<command> [options]`)
program
  .command('example <mainCommand>')
  .description('这是example命令')
  .option('-w, --watch', '是否监听文件变化')
  .option('-c, --component <componentName>', '创建一个组件??')
  .action((mainCommand, options) => {
    console.log(mainCommand, options)
  })

program.on('command:*', ([cmd]: any[]) => {
  program.outputHelp()
  console.log(`\n未知命令 ${cmd}.\n`)
  process.exitCode = 1
})

program.parse()
```

### 全局安装 cli 并使用

运行`npm link`,创建全局链接，相当于`npm i @nicevue/cli -g`, 现在我们可以使用`nicevue`这个全局命令了

### 测试 cli 是否生效

命令行运行`nicevue`命令

命令行输出

```output
Usage: index <command> [options]

Options:
  -V, --version                    output the version number
  -h, --help                       display help for command

Commands:
  example [options] <mainCommand>  这是example命令
  create <componentName>           在当前目录的src目录下创建一个组件目录
  help [command]                   display help for command
```

### 测试`example`命令

命令行运行 `nicevue example doSomething -w -c Icon`

命令行输出：`doSomething { watch: true, component: 'Icon' }`, 我们的命令行工具生效了生效了

## 开发一个创建组件的命令

看代码...

### 创建组件`Table`

进入子仓库@nicevue/ui 命令行运行 `nicevue create table`

可以看到@nicevue/ui 子仓库下生成了 Table 组件

在项目中可以使用了...
