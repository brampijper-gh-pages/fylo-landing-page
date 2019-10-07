import Vue from "vue";
import App from "./App.vue";
import './assets/css/global.css';
import smoothscroll from 'smoothscroll-polyfill';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookSquare, faInstagram, faTwitterSquare, faPhone, faEnvelope, faMapMarkerAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

// to support auto scrolling on IE / Safari;
smoothscroll.polyfill();

new Vue({
    el: '#app',
    render: h => h(App)
})