<template>
    <div id="app">
        <h1>Welcome to the Wok Shop</h1>
        <WokList/>
    </div>
</template>

<script>
    import WokList from './components/WokList'

    export default {
        name: 'App',
        components: {
            WokList
        }
    }
</script>