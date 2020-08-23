import Vue from 'vue'
import './bootstrap'
import App from './App'
import './icons' // icon
import router from './router'
//Vue.config.productionTip = false;
import Meta from 'vue-meta';
import 'normalize.css/normalize.css'
import './styles/index.scss' // global css

Vue.use(Meta);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})