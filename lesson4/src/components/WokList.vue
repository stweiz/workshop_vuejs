<template>
    <div class="wokList">
        <h2>This is the list of available woks:</h2>
        <Wok v-for="wok in wokList"
             v-bind:key="wok.id"
             v-bind:wok="wok"/>
        <!-- In lesson3 we had to add each new Wok as a new HTML element. Annoying, not? Now we iterate over a list -->
    </div>
</template>

<script>
    import Wok from './Wok'

    export default {
        name: 'WokList',
        components: {
            Wok
        },
        data() {
            return {
                wokList: [
                    {id: 1, name: "Standard Wok", price: "€20.00"},
                    {id: 2, name: "De Luxe Wok", price: "€30.00"}
                ]
            }
        }
    }

</script>

<style scoped>
    .wokList {
    }
</style>
