/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-26 17:09:35
 */
import { defineComponent, ref } from 'vue'
// import { Button } from '@nicevue/ui'

export const props = {}

export default defineComponent({
  props,
  // components: { NiceButton: Button },
  setup() {
    const count = ref(0)
    const handleCount = () => count.value++
    return () => {
      return (
        <div class="wrap">
          <nice-button onClick={handleCount}>add</nice-button>
          {/* <Button onClick={handleCount}>add</Button> */}
          <p>count: {count.value}</p>
        </div>
      )
    }
  }
})
