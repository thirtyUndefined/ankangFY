import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import animate from 'animate.css'


import './assets/init.css'


import * as loginService from './service/loginService';

// loginService.login("1872942", "wl2602756824").then(res => {
//   console.log(res)
// })

Vue.use(animate);
Vue.use(ElementUi);


// 将echarts挂载到vue原型上
// Vue.prototype.$echarts = echarts;

// 网站被访问时，需要用token换取用户身份
loginService.whoami().then(res => {
  console.log(res)
  store.state.userInfo = {
    userImg: res.data.img,
    userName: res.data.name,
  }
  console.log(store.state.userInfo)
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
