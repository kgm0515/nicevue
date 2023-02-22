---
title: 在 Markdown 中使用 vue
lang: en-US
---

# 在 Markdown 中使用 vue

部署案例: https://juejin.cn/post/7129201521295622152

## Templating

Each Markdown file is first compiled into HTML and then passed on as a Vue component to the Vite process pipeline. This means you can use Vue-style interpolation in text:

<div>{{ 1 + 1 }}</div>

## Directives

<div v-for="i in 3">{{ i }}</div>

## Access to Site & Page Data

<script setup>
import { useData } from 'vitepress'
// import Button from '../../ui/src/button/button.tsx'
import Button from '/demo/button-base.vue'

const { page } = useData()
</script>

<pre>{{ page }}</pre>

## Input

::: v-pre
`{{ This will be displayed as-is }}`
:::

## Using Components

<Button text="aaaaaa"/>
