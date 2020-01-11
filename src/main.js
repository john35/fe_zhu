import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
// Axios.defaults.headers.common['Authentication-Token'] = store.state.token;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
