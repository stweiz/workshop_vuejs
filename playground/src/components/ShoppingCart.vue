<template>
  <div class="shoppingCart">
      <h2>This is your shopping cart:</h2>
      <ul class="shopping-cart-list">
          <ShoppingCartItem
                  v-for="(cartItem, index) in basket"
                  :key="index"
                  :cartItem="cartItem"
          />
      </ul>
      Total: {{ total | currency }}
      <button v-on:click="emptyCart">Empty cart</button>
  </div>
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
            emptyCart: function (event) {
                this.$store.dispatch('removeAllItems', this.wok)
            }
        },
        filters: {currency}
    }
</script>

<style scoped>
  .shopping-cart-list {
  }
</style>
