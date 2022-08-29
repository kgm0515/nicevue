/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 09:46:46
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-29 20:31:39
 */
import { defineComponent, ref } from 'vue'
import TestButton from './TestButton'
import HomeZh from '../docs/home.zh.md'
import ButtonZh from '../../ui/src/button/docs/zh.md'
import ButtonEn from '../../ui/src/button/docs/en.md'
// import TableZh from '../../ui/src/table/docs/zh.md'

export default defineComponent({
  setup() {
    const route = ref(0)
    const change = (val: number) => (route.value = val)
    return () => {
      return (
        <div class="container">
          <ul class="menu">
            <li class={`menu-item` + `${route.value === 0 ? ' active' : ''}`} onClick={() => change(0)}>
              普通案例
            </li>
            <li class={`menu-item` + `${route.value === 1 ? ' active' : ''}`} onClick={() => change(1)}>
              组件库简介
            </li>
            <li class={`menu-item` + `${route.value === 2 ? ' active' : ''}`} onClick={() => change(2)}>
              按钮组件
            </li>
            <li class={`menu-item` + `${route.value === 3 ? ' active' : ''}`} onClick={() => change(3)}>
              button component
            </li>
            {/* <li class={`menu-item` + `${route.value === 4 ? ' active' : ''}`} onClick={() => change(4)}>
              Table组件
            </li> */}
          </ul>
          {route.value === 0 && <TestButton />}
          {route.value === 1 && <HomeZh />}
          {route.value === 2 && <ButtonZh />}
          {route.value === 3 && <ButtonEn />}
          {/* {route.value === 4 && <TableZh />} */}
        </div>
      )
    }
  }
})
