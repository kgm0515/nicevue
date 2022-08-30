<script setup lang="ts">
  import '@nicevue/ui/dist/style/base.css' // 引入基础样式
  import '@nicevue/ui/dist/style/theme/button.css' // 引入按钮的样式
  import { Button } from '@nicevue/ui'
</script>

<template>
  <div>
    <Button type="primary" text :bg="true">click me</Button>
  </div>
</template>

<style scoped></style>
