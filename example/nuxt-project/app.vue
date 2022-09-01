<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-31 21:02:51
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-09-01 09:02:24
-->
<template>
  <div>
    <nice-button type="primary" @click="handle">{{ count }}</nice-button>
    <NuxtWelcome />
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      const count = ref(0)
      const handle = () => count.value++
      return {
        handle,
        count
      }
    }
  })
</script>

<style>
  @import '@nicevue/ui/dist/style/index.css';
</style>
