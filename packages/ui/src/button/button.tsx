/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-26 14:34:50
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-27 10:48:29
 */
import { defineComponent, PropType } from 'vue'

export const props = {
  type: {
    type: String as PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>,
    default: 'default'
  },
  size: {
    type: String as PropType<'small' | 'middle' | 'large'>,
    default: 'middle'
  },
  disabled: {
    type: Boolean
  },
  text: {
    // 文字按钮
    type: Boolean,
    default: false
  },
  bg: {
    // 文字按钮是否带背景
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function
  }
}

export default defineComponent({
  name: 'NiceButton',
  props,
  setup(props, { slots }) {
    const { type, size, disabled, text, bg } = props
    const getClass = () => {
      const tempList = ['nice-button', `nice-button--${type}`, `nice-button--${size}`]
      if (disabled) tempList.push(`nice-button--disabled`)
      if (text) tempList.push(`nice-button--text`)
      if (bg) tempList.push(`nice-button--bg`)
      return tempList.join(' ')
    }

    return () => {
      return (
        <button disabled={disabled} class={getClass()} onClick={() => props.onClick && props.onClick()}>
          <span class="nice-button__content">{slots.default && slots.default()}</span>
        </button>
      )
    }
  }
})
