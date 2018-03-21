/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Preferred from './components/Preferred'


Vue.use(VueRouter)

const routes = [

  { path: '/login', 'component': Login },
  { path: '/register', 'component': Register },
  { path: '/home', 'component': Home },
  { path: '/preferred-shop', 'component': Preferred },

];

const router = new VueRouter({
  routes
})


new Vue({
    el: '#app',
    template: '<App/>',
    components: {
    	App
    },
    router
});