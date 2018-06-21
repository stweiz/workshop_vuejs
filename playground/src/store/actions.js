export default {
    addItem ({ commit }, item) {
        commit('addItem', {
            item,
            done: false
        })
    },

    removeItem ({ commit }, item) {
        commit('removeItem', item)
    },

    removeAllItems ({commit}) {
        commit('removeAllItems')
    }

}