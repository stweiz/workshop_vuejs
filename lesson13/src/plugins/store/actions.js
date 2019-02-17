export default {
    addItem({commit}, item) {
        commit('addItem', item)
    },

    removeItemAmount({commit}, itemId, quantity) {
        commit('removeItemAmount', itemId, quantity)
    },

    removeAllItems({commit}) {
        commit('removeAllItems')
    }
}
