<template>
    <div id="app">
        <h1>Welcome to the Wok Shop</h1>
        <Wok wokId="1" wokName="Basic Wok"/>
        <Wok wokId="2" wokName="Special Wok"/>
        <Wok wokId="3" wokName="Iron Wok"/>
    </div>
</template>

<script>
    import Wok from './components/Wok'

    export default {
        name: 'App',
        components: {
            Wok,
        }
    }
</script>
