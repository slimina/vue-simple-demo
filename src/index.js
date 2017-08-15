import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import httpclient from './util/httpClient'

import  routes from './routers/userRouter'

import ElementUI from 'element-ui'
import App from './App.vue'

require("./style/style.css");

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(ElementUI);
Vue.config.lang = 'zh-cn';
Vue.config.productionTip = false;

Vue.prototype.$httpclient = httpclient;

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
});


var app = new Vue({
  el: '#app',
    router,
  render: h => h(App)
});
