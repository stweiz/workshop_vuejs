export const STORAGE_KEY = 'vuejs-workshop'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
   window.localStorage.clear()
}

export const mutations = {
    addItem (state, item) {
        const found = state.basket.some(cartItem => {
            if (cartItem.item.id === item.id) {
                cartItem.amount++
                return true
            }
        })
        if (!found) state.basket.push({
            item: item,
            amount: 1
        })
    },

    removeBasketPosition (state, itemId) {
        state.basket.some(cartItem => {
            if (cartItem.item.id === itemId) {
                state.basket.splice(state.basket.indexOf(cartItem), 1)
                return
            }
        })
    },

    removeAllItems (state) {
        state.basket = []
    }

}