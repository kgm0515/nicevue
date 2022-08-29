/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-29 09:41:58
 */
import { defineComponent } from 'vue'
import TestButton from './TestButton'
import HomeZh from '../docs/home.zh.md'
import ButtonZh from '../docs/button.zh.md'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div class="test-button">
          {/* <p>-----------测试按钮组件--------</p>
          <TestButton /> */}
          {/* <p>-----------测试markdown--------</p> */}
          <HomeZh />
          <ButtonZh />
        </div>
      )
    }
  }
})
