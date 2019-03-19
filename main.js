import Vue from 'vue';
import vuex from 'vuex';

import VueRouter from 'vue-router'
import router from './src/store/router'
//加入iview 组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

export default new Vue({
    router
}).$mount("#root")
  