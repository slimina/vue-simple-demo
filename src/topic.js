import Vue from 'vue'
import httpclient from './util/httpClient'
import VueRouter from 'vue-router'
import routes from './routers/topicRouter'
import ElementUI from 'element-ui'
import App from './App.vue'

require("./style/style.css");

require('es6-promise').polyfill();

Vue.use(VueRouter);

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