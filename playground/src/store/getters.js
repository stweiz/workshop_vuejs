export default {
    basketTotal: state => {
        return state.basket.reduce((acc, currValue, currIndex, array) => {
            return acc + currValue.item.price * currValue.amount
        }, 0)
    }
}