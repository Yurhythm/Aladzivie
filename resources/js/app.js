
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {routes} from './routes';
import StoreData from './store';
import MainApp from './components/MainApp.vue';
import {initialize} from './helper/general';
import NProgress from 'nprogress';
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

require("nprogress/nprogress.css");

Vue.use(VueRouter);
Vue.use(Vuex);
const store = new Vuex.Store(StoreData);
const router = new VueRouter({
    routes,
    mode: 'history'
});

initialize(store, router);

axios.interceptors.request.use(function(config){
    NProgress.start();
    NProgress.set(0.2);    
    return config;
}, function (error) {
    console.error(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
    NProgress.done();
    return response;
}, function(error){
    console.error(error);
    return Promise.reject(error);
});

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        MainApp
    }
});
