import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'
import getters from './getters'
import plugins from './plugins'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        basket: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    getters,
    actions,
    mutations,
    plugins
})
