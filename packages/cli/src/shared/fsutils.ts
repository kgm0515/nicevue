import {
  appendFileSync,
  ensureFileSync,
  existsSync,
  outputFileSync,
  pathExistsSync,
  readdir,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'fs-extra'
import { SCRIPTS_EXTNAME } from './const'
const { resolve, extname } = require('path')

// 判断是否是文件
export const isFile = (path: string): boolean => existsSync(path) && statSync(path).isFile()
// 判断是否是文件夹
export const isDir = (path: string): boolean => existsSync(path) && statSync(path).isDirectory()
// 判断是否是.d.ts文件
export const isDTS = (path: string): boolean => existsSync(path) && path.endsWith('.d.ts')
// 判断是否是.vue
export const isSFC = (file: string): boolean => pathExistsSync(file) && extname(file) === '.vue'
// 判断是否是.jsx
export const isJSX = (file: string): boolean => pathExistsSync(file) && extname(file) === '.jsx'
// 判断是否是.tsx
export const isTSX = (file: string): boolean => pathExistsSync(file) && extname(file) === '.tsx'
// 判断是否是['.tsx', '.ts', '.jsx', '.js']
export const isScript = (file: string): boolean => pathExistsSync(file) && SCRIPTS_EXTNAME.includes(extname(file))
// 判断是否是.md
export const isMD = (file: string): boolean => pathExistsSync(file) && extname(file) === '.md'
// 判断是否是.less
export const isLess = (file: string): boolean => pathExistsSync(file) && extname(file) === '.less'
// 返回替换后缀后的文件名
export const replaceExtname = (file: string, ext: string) => file.replace(extname(file), ext)
// 解析-abc字符串，返回大写Abc(小驼峰)
export const camelize = (str: string) => str.replace(/-(\w)/g, (_: string, p: string) => p.toUpperCase())
// 把abc-def字符串转为AbcBef(大驼峰)
export const bigCamelize = (str: string) => camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase())

// 往文件后面添加内容
export function appendFileSmart(pathname: string, code: string) {
  if (pathExistsSync(pathname)) {
    const content = readFileSync(pathname, 'utf-8')
    if (!content.includes(code)) {
      appendFileSync(pathname, code)
    }
  }
}
/*
 * 生成配置文件到文件夹
 * @param path 生成文件的绝对路径
 * @param code 要生成的内容
 */
export function writeFileSmart(pathname: string, code: string) {
  ensureFileSync(pathname)
  const content = readFileSync(pathname, 'utf-8')
  if (content !== code) {
    outputFileSync(pathname, code)
  }
}