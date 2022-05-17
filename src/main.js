import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

import * as hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
Vue.directive('highlight', {
  deep: true,
  bind(el, binding) {
    hljs.highlightElement(el)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
