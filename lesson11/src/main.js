import Vue from 'vue'
import App from './App.vue'

// (Method 1 & 2) Needed by VueAxios, or if you want to make axios in your whole Vue application available
import axios from 'axios'
// (Method 1) Wrapper for axios
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

// (Method 2) Define axios as "$http", so you can call it in any component with "this.$http"
Vue.prototype.$http = axios;

// (Method 1) Use plugins (Must be done, before Vue instance is initialized with "new")
// With this you can call axios with "this.axios"
Vue.use(VueAxios, axios)

new Vue({
    render: h => h(App)
}).$mount('#app')

