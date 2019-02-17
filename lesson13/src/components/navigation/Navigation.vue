<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <router-link to="/" tag="b-navbar-brand">
                <div><font-awesome-icon icon="grin-tongue-wink"/><b>  Wok Shop</b></div>
            </router-link>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item><router-link class="nav-bar-item" to="/woks">Hot woks</router-link></b-nav-item> <!-- <router-link tag="b-nav-item" macht den Router kaputt -->
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item><router-link class="nav-bar-item" to="/spoons">Spoons</router-link></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item><router-link class="nav-bar-item" to="/cart">Go to cart</router-link></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <router-link to="/cart"><ShoppingCartSmall/></router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import ShoppingCartSmall from '../cart/ShoppingCartSmall.vue'

    export default {
        name: 'Navigation',
        components: {ShoppingCartSmall}
    }
</script>

<style scoped>
    .nav-bar-item {
        color: white;
    }
</style>
