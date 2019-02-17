<template>
    <b-row class="shopping-cart-item">
        <b-col cols="8"><p>{{ cartItem.amount }}x {{ cartItem.item.name }} à {{ cartItem.item.price | currency }} </p></b-col>
        <b-col cols="4">
            <label title="quantityToRemove">Amount of items
                <input type="number" id="test" name="quantityToRemove" min="0" :max="cartItem.amount" v-model="amountToRemove">
                <button class="shopping-cart-item-remove" v-on:click="removeItemByQuantity">
                <font-awesome-icon icon="times"/>
                </button>
            </label>

        </b-col>
    </b-row>
</template>

<script>
    import currency from '../filters/currency'

    export default {
        name: 'ShoppingCartItem',
        props: ['cartItem'],
        data() {
            return {
                amountToRemove: 0
            }
        },
        filters: {currency},
        methods: {
            removeItemByQuantity: function () {
                this.$store.dispatch('removeItemAmount', {itemId: this.cartItem.item.id, quantity: this.amountToRemove})
                this.amountToRemove = 0
            }
        },
    }
</script>

<!-- If style is scoped:
<style scoped>
it will be used for the component everywhere. -->
<style>
    .shopping-cart-item {
        color: #0d99a5;
    }

    .shopping-cart-item-remove {
        color: #8dcffc;
    }

    .shopping-cart-item-remove svg {
        fill: currentColor;
    }
</style>
