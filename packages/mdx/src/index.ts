/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-27 16:21:23
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-27 16:30:11
 */
import type { Plugin } from 'vite'
import * as mdx from '@mdx-js/mdx'
import type { FilterPattern } from '@rollup/pluginutils'
import { createFilter } from '@rollup/pluginutils'
interface Options {
  include?: FilterPattern
  exclude?: FilterPattern
  frame?: 'vue' | 'react'
}
export default (options: Options = {}): Plugin => {
  return {
    name: 'vite-plugin-mdx',
    enforce: 'pre',
    transform(code: any, id: string, _ssr: any) {
      const { include = /\.(mdx|md)$/, exclude, frame = 'vue' } = options || {}
      const filter = createFilter(include, exclude)
      if (!filter(id)) return code
      const codeVFile = mdx.compileSync(code).value
      let originCode = codeVFile.toString()
      if (frame === 'vue') {
        originCode = originCode.slice(originCode.indexOf('"react/jsx-runtime";'))
        originCode = `\
import { h } from "vue";
import hljs from "@nicevue/mdx/highlight/index.js"
import '@nicevue/mdx/highlight/styles/vs.css'
const _Fragment = '_Fragment';
const _jsx = (tag, { children, ...args }) => {
  if(tag === '_Fragment') {
    tag = 'div'
    args = {className: 'mdx-wrapper', ...args}
  } else if(typeof tag === "string") {
    // 实现代码语法高亮
    if(tag === 'code') {
      const className = args.className
      if(className && className.startsWith('language-')) {
        const lang = args.className.replace('language-', '')
        const html = hljs.highlight(children, {
          language: 'tsx'
        }).value
        return h(tag, { innerHTML: html, className:"language-code "+className}, null, 8 /* PROPS */, ["innerHTML"])
      }
    }
    args = {className:'mdx-'+tag, ...args} 
  }
  if(['h2', 'h3'].includes(tag) && typeof children === 'string') {
    let anchor = '#'+children
    while(anchor.includes(' ')) {
      anchor = anchor.replace(' ', '-')
    }
    return h(tag, args, [children, h('a', {className: 'mdx-anchor mdx-'+tag+'-a', id:anchor, href: anchor,name: anchor})])
  }
  return h(tag, args, children)
};
const _jsxs = _jsx;
${originCode}
`
      }
      return {
        code: originCode
      }
    }
  }
}
