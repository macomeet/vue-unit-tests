import { mount } from '@vue/test-utils'
import WithAjax from '@/components/WithAjax.vue'

describe('withAjax.vue', () => {
  it('should get and display my todo', () => {
    const wrapper = mount(WithAjax)
    // pytanie - dlaczego fetch is not defined ? 
    console.log(wrapper)
    expect(wrapper.text()).toContain('delectus aut autem')
  })
})
