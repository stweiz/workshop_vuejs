// Vue
import Vue from 'vue'
// Vue-Router
import router from './plugins/router'
// Our application it self
import App from './App.vue'

import axios from './plugins/axios'

// Some neat icons for buttons etc
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faGrinTongueWink} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

// Use plugin "BootstrapVue" (Must be done, before the Vue instance is initialized with "new")
Vue.use(BootstrapVue);

library.add(faGrinTongueWink);
// Components must also be added, before Vue instance is initialized with "new"
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Removes the "developer mode warning" in the browsers console
Vue.config.productionTip = false;

// Create our Vue instance with Vues components store and router
// and override the render parameter with our Application
// Then mount it to the app element defined in our index.html
new Vue({
    router,
    axios,
    render: h => h(App)
}).$mount('#app');
