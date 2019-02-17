<template>
    <div class="shopping-cart-small">
        <font-awesome-icon icon="shopping-cart"/>
        {{ total | currency }}
    </div>
</template>

<script>
    import currency from '../filters/currency'

    export default {
        name: 'ShoppingCartSmall',
        computed: {
            total() {
                return this.$store.getters.basketTotal
            }
        },
        filters: {currency}
    }
</script>

<style scoped>
    .shopping-cart-small {
        color: white;
    }
</style>
