<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <router-link to="/" tag="b-navbar-brand">
                <font-awesome-icon icon="grin-tongue-wink"/>
                WokShop
            </router-link>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <!--<router-link to="/woks" tag="b-nav-item">Hot woks</router-link>
                    <router-link to="/cart" tag="b-nav-item">Go to cart</router-link>-->
                    <!-- TODO tag="b-nav-item" macht den Router kaputt -->
                    <b-nav-item><router-link to="/woks">Hot woks</router-link></b-nav-item>
                    <b-nav-item><router-link to="/spoons">Spoons</router-link></b-nav-item>
                    <b-nav-item><router-link to="/cart">Go to cart</router-link></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <router-link to="/cart" tag="b-nav-item">
                        <ShoppingCartSmall/>
                    </router-link>
                    <!-- TODO <b-nav-item href="#"><font-awesome-icon icon="question-circle" /></b-nav-item> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import ShoppingCartSmall from './ShoppingCartSmall.vue'

    export default {
        name: 'Navigation',
        components: {ShoppingCartSmall}
    }
</script>
