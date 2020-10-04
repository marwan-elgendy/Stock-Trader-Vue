import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes'
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-7f1c7.firebaseio.com/';

Vue.filter('currency',(value) => {
  return '$' + value.toLocaleString()
});
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
