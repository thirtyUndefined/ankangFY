import Vue from 'vue'
import Vuex from 'vuex'
import loginUser from './loginUser';
import userDynamic from './userDynamic';
import userInfo from './userInfo';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginUser,
    userDynamic,
    userInfo,
  }
})
