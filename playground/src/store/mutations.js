export const STORAGE_KEY = 'vuejs-workshop'

/*
// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
   window.localStorage.clear()
}
*/

export const mutations = {
    addItem (state, item) {
        state.basket.push(item)
    },

    removeItem (state, item) {
        state.basket.splice(state.basket.indexOf(item), 1)
    },

    removeAllItems (state, item) {
        state.basket = []
    }


}