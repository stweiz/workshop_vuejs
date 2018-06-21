<template>
    <div class="wokList">
        <h2>This is the list of available woks:</h2>
        <Wok wokID="1"/>
        <Wok wokID="2"/>
        <Wok wokID="3"/>
    </div>
</template>

<script>
    import Wok from './Wok'

    export default {
        name: 'WokList',
        components: {
            Wok
        }
    }
</script>

<style scoped>
    .wokList {
    }
</style>
