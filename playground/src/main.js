// Vue
import Vue from 'vue'
// Vuex
import store from './store'
//Vue-Router
import router from './router'
// Our application it self
import App from './App.vue'
// axios lib for HTTP requests
import axios from 'axios'

// Bootstrap for vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Use plugin "BootstrapVue" (Must be done, before Vue instance is initialized with "new")
Vue.use(BootstrapVue);

// Some neat icons for buttons etc
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faGrinTongueWink, faQuestionCircle, faShoppingCart, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faGrinTongueWink, faQuestionCircle, faShoppingCart, faTimes);
// Components must also be added, before Vue instance is initialized with "new"
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Removes the "developer mode warning" in the browsers console
Vue.config.productionTip = false;

// Add axios to the global scope in our Vue application, so we can call its function by "this.$http"
// An example is available in "WokList.vue"
Vue.prototype.$http = axios;

// Create our Vue instance with Vues components store and router
// and override the render parameter with our Application
// Then mount it to the app element defined in our index.html
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
