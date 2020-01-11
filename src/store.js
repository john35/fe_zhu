import Vue from 'vue'
import Vuex from 'vuex'
import {getData,pigPrice,pigFenShi,signIn,regist} from './api/all'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    token:"",
    isLogin:false,
    userName:"",
  },
  mutations: {
    showLoading(state,loading){
      state.loading=true;
    },
    hideLoading(state,loading){
      state.loading=false;
    },
    set_token(state, token) {
      console.log(token);
      console.log("-----");
      state.token = token
      state.isLogin = true
    },
    set_user(state,name){
      state.userName = name
    },
    del_token(state) {
      state.token = ''
      state.isLogin = false
    }
  },
  actions: {
    async getData_({commit},name){
      return await getData(name);
    },
    async pigPrice_({commit},params){
      return await pigPrice(params);
    },
    async pigFenShi_({commit},params){
      return await pigFenShi(params);
    },
    async signIn_({commit},params){
      return await signIn(params);
    },
    async regist_({commit},params){
      const data= await regist(params);
      console.log(data);
      if(data.code==0){
        return data
      }
      return Promise.reject(data);
    }
  }
})
