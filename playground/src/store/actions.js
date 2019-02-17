export default {
    addItem({commit}, item) {
        commit('addItem', item)
    },

    removeBasketPosition({commit}, itemId) {
        commit('removeBasketPosition', itemId)
    },

    removeAllItems({commit}) {
        commit('removeAllItems')
    }
}
