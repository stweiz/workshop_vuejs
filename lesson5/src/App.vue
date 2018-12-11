<template>
    <div id="app">
        <h1>Welcome to the Wok Shop</h1>
        <Wok wokId="1" wokName="Basic Wok"/>
        <Wok wokId="2" wokName="Special Wok"/>
        <Wok wokId="3" wokName="Iron Wok"/>
        <WokSpoon spoonId="1" spoonName="Wooden Spoon"/> <!-- 1 step -->
    </div>
</template>

<script>
    import Wok from './components/Wok'
    import WokSpoon from './components/WokSpoon' // 3 step --> Create WokSpoon.vue in components

    export default {
        name: 'App',
        components: {
            Wok,
            WokSpoon //2 step
        }
    }
</script>
