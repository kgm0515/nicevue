/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-27 11:18:00
 */
import { defineComponent, ref } from 'vue'
// import { Button } from '@nicevue/ui' // 按需引入-引入按钮组件
// import '@nicevue/ui/dist/style/theme/button.css' // 按需引入-引入按钮样式

export default defineComponent({
  // components: { NiceButton: Button },
  setup() {
    const count = ref(0)
    const handleCount = () => count.value++
    return () => {
      return (
        <div class="wrap">
          <nice-button type="primary" onClick={handleCount}>
            add
          </nice-button>
          {/* <Button type="success" onClick={handleCount}>add</Button> */}
          <p>count: {count.value}</p>
        </div>
      )
    }
  }
})