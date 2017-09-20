import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
