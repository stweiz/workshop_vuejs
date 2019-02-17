export default {
    basketTotal: state => {
        return state.basket.reduce((acc, currValue) => {
            return acc + currValue.item.price * currValue.amount
        }, 0)
    }
}
