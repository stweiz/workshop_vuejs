<template>
  <div id="app">
    <h1>Welcome to the Wok Shop</h1>
    <Wok wokID="1" />
    <Wok wokID="2" />
    <Wok wokID="3" />
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