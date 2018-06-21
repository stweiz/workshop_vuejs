import Vue from 'vue'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    store, // inject store to all children
    render: h => h(App)
}).$mount('#app')


