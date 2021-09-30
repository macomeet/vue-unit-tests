import { mount } from '@vue/test-utils'
import WithTranslation from '@/components/WithTranslation.vue'

describe('withIcon.vue', () => {
  it('should render icon', () => {
    const wrapper = mount(WithTranslation)
    console.log(wrapper)
    expect(wrapper.find('.message').exists()).toBe(true)
  })
})
