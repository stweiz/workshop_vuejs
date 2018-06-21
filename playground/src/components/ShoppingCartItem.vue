<template>
  <div class="shopping-cart-item">
      {{ cartItem.amount }}x {{ cartItem.item.name }} à {{ cartItem.item.price | currency }} <button v-on:click="remove"><font-awesome-icon icon="times"/></button>
  </div>
</template>

<script>
    import currency from '../filters/currency'

    export default {
        name: 'ShoppingCartItem',
        props: ['cartItem'],
        filters: {currency},
        methods: {
            remove: function (event) {
                this.$store.dispatch('removeBasketPosition', this.cartItem.item.id)
            }
        },
    }
</script>

<style scoped>
  .shopping-cart-item {
  }
</style>
