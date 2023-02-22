import { DefaultTheme, defineConfig } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/components/basic-component1' },
  // 顶部导航下拉菜单按如下方式：
  {
    text: '下拉菜单',
    items: [
      { text: 'Item A', link: '/item-1' },
      { text: 'Item B', link: '/item-2' },
      { text: 'Item C', link: '/item-3' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': [
    {
      text: '指南',
      collapsed: true,
      items: [
        { text: '组件库介绍', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickstart' },
        { text: 'markdown语法', link: '/guide/markdown' },
        { text: '加载资源', link: '/guide/load-asserts' },
        { text: '使用vue组件', link: '/guide/use-vue' }
      ]
    }
  ],
  '/components': [
    {
      text: '通用基础组件',
      collapsed: false,
      items: [
        { text: '基础组件 1', link: '/components/basic-component1' },
        { text: '基础组件 2', link: '/components/basic-component2' }
      ]
    },
    {
      text: '通用业务组件',
      collapsed: false,
      items: [
        { text: '通用组件 1', link: '/components/common-component1' },
        { text: '通用组件 2', link: '/components/common-component2' }
      ]
    },
    {
      text: '高级业务组件',
      collapsed: false,
      items: [
        { text: '高级组件 1', link: '/components/pro-component1' },
        { text: '高级组件 2', link: '/components/pro-component2' }
      ]
    }
  ]
}

export default defineConfig({
  title: 'YYG Admin UI',
  description: '基于 vite vue3 element-plus 组件库',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,
  ignoreDeadLinks: true,
  outDir: '../public',
  head: [
    // ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  // 文档根目录, vitepress dev docs 默认就是docs
  // srcDir: './docs',
  // 路由路径不需要带.html后缀
  cleanUrls: true,
  // 路径重写
  rewrites: {
    // 'packages/pkg-a/src/pkg-a-code.md': 'pkg-a/pkg-a-code.md',
    // 'packages/pkg-b/src/pkg-b-code.md': 'pkg-b/pkg-b-code.md',
    // 'components/:pkg/:page': ':pkg/:page'
  },
  markdown: {
    // theme: {
    //   light: 'vitesse-light',
    //   dark: 'vitesse-dark'
    // }
    theme: 'material-theme-palenight'
  },
  themeConfig: {
    logo: '/img/baidu.png',
    siteTitle: '组件库标题',
    outline: 3,
    outlineTitle: 'On this page',
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    lastUpdatedText: 'Updated Date',
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }
  }
})
