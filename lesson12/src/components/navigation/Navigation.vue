<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <router-link to="/" tag="b-navbar-brand">
                <b-navbar-nav><font-awesome-icon icon="grin-tongue-wink"/><span>Wok Shop</span></b-navbar-nav>
            </router-link>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item><router-link to="/woks">Hot woks</router-link></b-nav-item> <!-- <router-link tag="b-nav-item" macht den Router kaputt -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
    }
</script>
