// Vue, VueRouter, Vuex and the application itself
import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'

// bootstrap for vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Use plugin "BootstrapVue" (Must be done, before Vue instance is initialized with "new")
Vue.use(BootstrapVue);

// some neat icons for buttons etc
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faGrinTongueWink, faQuestionCircle, faShoppingCart, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faGrinTongueWink, faQuestionCircle, faShoppingCart, faTimes);
// Components must also be added, before Vue instance is initialized with "new"
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Removes the "developer mode warning" in the browsers console
Vue.config.productionTip = false;

// Create our Vue instance with Vues components store and router
// and override the render parameter with our Application
// Then mount it to the app element defined in our index.html
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
