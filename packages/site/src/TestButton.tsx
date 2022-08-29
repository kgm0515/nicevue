/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-29 15:43:18
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
        <div class="wrap" style={{ marginTop: '20px' }}>
          <nice-button type="primary" onClick={handleCount}>
            添加
          </nice-button>
          {/* <Button type="success" onClick={handleCount}>添加</Button> */}
          <p>count: {count.value}</p>
        </div>
      )
    }
  }
})
