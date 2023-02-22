<template>
  <div :class="getClass()">
    {{ text }}
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  export default defineComponent({
    name: 'NiceScroll',
    props: {
      type: {
        type: String as PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>,
        default: 'default'
      },
      text: {
        type: String,
        default: ''
      }
    },
    setup(props, { emit }) {
      const { type } = props
      const getClass = () => {
        const tempList = ['nice-scroll', `nice-scroll--${type}`]
        return tempList.join(' ')
      }
      return {
        getClass
      }
    }
  })
</script>
