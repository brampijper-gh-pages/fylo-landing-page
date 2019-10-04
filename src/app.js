import Vue from "vue";
import App from "./App.vue";
import './assets/css/global.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebookSquare, faInstagram, faTwitterSquare);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
    el: '#app',
    render: h => h(App)
})