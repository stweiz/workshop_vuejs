<template>
    <div id="app">
        <Navigation/>
        <WokList/>
        <ShoppingCart/>
    </div>
</template>

<script>
    import WokList from './components/WokList'
    import ShoppingCart from './components/ShoppingCart'
    import Navigation from './components/Navigation'

    export default {
        name: 'App',
        components: {
            Navigation,
            ShoppingCart,
            WokList
        }
    }
</script>