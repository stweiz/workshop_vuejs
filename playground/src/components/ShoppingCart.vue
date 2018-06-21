<template>
  <div class="shoppingCart">
      <h2>This is your shopping cart:</h2>
      <ul class="shopping-cart-list">
          <ShoppingCartItem
                  v-for="(item, index) in basket"
                  :key="index"
                  :item="item"
          />
      </ul>
    Your shopping cart is empty.
  </div>
</template>

<script>
    import ShoppingCartItem from './ShoppingCartItem.vue'

    export default {
        name: 'ShoppingCart',
        components: {ShoppingCartItem},
        computed: {
            basket() {
                return this.$store.state.basket
            }
        }
    }
</script>

<style scoped>
  .shopping-cart-list {
  }
</style>
