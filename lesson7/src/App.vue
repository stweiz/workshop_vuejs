<template>
    <div id="app">
        <h1>Welcome to the Wok Shop</h1>
        <Wok/>
    </div>
</template>

<script>
    import Wok from './components/Wok'

    export default {
        name: 'App',
        components: {
            Wok
        }
    }
</script>