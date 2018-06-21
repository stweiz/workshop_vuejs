<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-brand href="#"><font-awesome-icon icon="grin-tongue-wink" /> WokShop</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="#">Hot Woks</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#"><ShoppingCartSmall/></b-nav-item>
                    <b-nav-item href="#"><font-awesome-icon icon="question-circle" /></b-nav-item>
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