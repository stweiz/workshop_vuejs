export const STORAGE_KEY = 'vuejs-workshop'

export const mutations = {
    addItem(state, item) {
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

    removeItemAmount(state, params) {
        const quantity = params.quantity;
        const cartItemIdToRemove = params.itemId;

        state.basket.some(cartItem => {
            const currentCartItemId = cartItem.item.id;
            const currentCartItemAmount = cartItem.amount;

            if (currentCartItemId === cartItemIdToRemove) {
                if (quantity > 0) {
                    if (currentCartItemAmount > quantity) {
                        cartItem.amount = currentCartItemAmount - quantity;
                    } else {
                        state.basket.splice(state.basket.indexOf(cartItem), 1)
                    }
                }
            }
        })
    },

    removeAllItems(state) {
        state.basket = []
    }

}
