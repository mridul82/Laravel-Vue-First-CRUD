
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps';
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCnerUz3TeqY-75uA2dfCa7ZQuV0jHkTS4',
        libraries: 'places'
    }
});

import '../lib/bootstrap/css/bootstrap.min.css';
import '../lib/owlcarousel/assets/owl.carousel.css';
import '../lib/animate/animate.min.css';
import '../lib/ionicons/css/ionicons.min.css';
import '../css/style.css';
import '../lib/font-awesome/css/font-awesome.min.css';

import { myroutes } from './routes';


// let owl_carousel = require('../lib/owlcarousel/owl.carousel.min.js');
// window.fn = owl_carousel;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({mode: 'history', routes: myroutes});

const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');