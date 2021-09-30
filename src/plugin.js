import Icon from './components/Icon.vue'
const plugin = {
  install(Vue) {
    Vue.component('Icon', Icon)
    Vue.prototype.$i18n = (msg) => `kiedyś to przetlumacze: ${msg}`
  },
}

export default plugin
