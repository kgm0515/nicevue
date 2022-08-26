/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 14:34:50
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-26 17:05:40
 */
import { defineComponent, PropType } from 'vue'

export const props = {
  type: {
    type: String as PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>,
    default: 'default'
  },
  text: {
    type: String,
    default: ''
  },
  onClick: {
    type: Function
  }
}

export default defineComponent({
  name: 'NiceScroll',
  props,
  setup(props) {
    const { type, text } = props
    const getClass = () => {
      const tempList = ['nice-scroll', `nice-scroll--${type}`]
      return tempList.join(' ')
    }

    return () => {
      return (
        <div class={getClass()} onClick={() => props.onClick && props.onClick()}>
          {text}
        </div>
      )
    }
  }
})
