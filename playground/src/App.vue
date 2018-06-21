<template>
    <div id="app">
        <h1>Welcome to the VueJS Wok-Shop</h1>

        <hr/>
        <WokList/>
        <hr/>
        <ShoppingCart/>
    </div>
</template>

<script>
    import WokList from './components/WokList'
    import ShoppingCart from './components/ShoppingCart'

    export default {
        name: 'App',
        components: {
            ShoppingCart,
            WokList
        }
    }
</script>