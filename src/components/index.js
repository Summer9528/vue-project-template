const requireComponent = require.context('./BigData', true, /\.vue$/)
export default {
  install (Vue) {
    requireComponent.keys().forEach(key => {
      const component = requireComponent(key).default
      Vue.component(component.name, component)
    })
  }
}
