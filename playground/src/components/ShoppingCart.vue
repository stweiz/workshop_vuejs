<template>
    <b-container>
        <h2 class="col">Your shopping cart:</h2>
        <b-col cols="6">
            <ul>
                <ShoppingCartItem
                        v-for="(cartItem, index) in basket"
                        :key="index"
                        :cartItem="cartItem"
                />
            </ul>
        </b-col>
        Total: {{ total | currency }}
        <button v-on:click="emptyCart">Empty cart</button>
    </b-container>
</template>

<script>
    import ShoppingCartItem from './ShoppingCartItem.vue'
    import currency from '../filters/currency'

    export default {
        name: 'ShoppingCart',
        components: {ShoppingCartItem},
        computed: {
            basket() {
                return this.$store.state.basket
            },
            total() {
                return this.$store.getters.basketTotal
            }
        },
        methods: {
            emptyCart: function () {
                this.$store.dispatch('removeAllItems', this.wok)
            }
        },
        filters: {currency}
    }
</script>

<style>
    /* Used in ShoppingCartItem.vue */
    .shopping-cart-item-remove {
        color: #cc0000;
    }

    .shopping-cart-item-remove svg {
        fill: currentColor;
    }
</style>
