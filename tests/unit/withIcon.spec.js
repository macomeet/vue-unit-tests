import { mount } from '@vue/test-utils'
import WithIcon from '@/components/WithIcon.vue'

describe('withIcon.vue', () => {
  it('should render icon', () => {
    const wrapper = mount(WithIcon)
    console.log(wrapper)
    expect(wrapper.find('.svg-icon').exists()).toBe(true)
  })
})
