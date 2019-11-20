import Vue from 'vue'
import Vuex from 'vuex'
import {getData,pigPrice,pigFenShi,signIn,regist} from './api/all'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
  },
  mutations: {
    showLoading(state,loading){
      state.loading=true;
    },
    hideLoading(state,loading){
      state.loading=false;
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
      return await regist(params);
    }
  }
})
