import Vue from 'vue'
import store from './store'
import App from './App.vue'

// bootstrap for vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// some neat icons for buttons etc
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGrinTongueWink, faQuestionCircle, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faGrinTongueWink, faQuestionCircle, faShoppingCart, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')


