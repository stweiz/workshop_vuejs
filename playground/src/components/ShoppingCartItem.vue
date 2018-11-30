<template>
    <b-row class="shopping-cart-item">
        <b-col cols="6"><p>{{ cartItem.amount }}x {{ cartItem.item.name }} à {{ cartItem.item.price | currency }} </p></b-col>
        <b-col cols="2">
            <button class="shopping-cart-item-remove" v-on:click="remove">
                <font-awesome-icon icon="times"/>
            </button>
        </b-col>
    </b-row>
</template>

<script>
    import currency from '../filters/currency'

    export default {
        name: 'ShoppingCartItem',
        props: ['cartItem'],
        filters: {currency},
        methods: {
            remove: function () {
                this.$store.dispatch('removeBasketPosition', this.cartItem.item.id)
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
