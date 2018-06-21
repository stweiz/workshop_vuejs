<template>
    <div>
        <h2>This is the list of available woks:</h2>
        <ul class="wok-list">
           <li v-for="wok in wokList" v-bind:key="wok.id">
               <Wok v-bind:wok="wok"/>
           </li>
        </ul>
        <br style="clear: both"/>
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
                    {id: 1, name: "Standard Wok", price: 20.0},
                    {id: 2, name: "De Luxe Wok", price: 30.0},
                    {id: 3, name: "Billigwok", price: 10.0},
                    {id: 4, name: "Wok Besteckset", price: 15.0}
                ]
            }
        }
    }

</script>

<style scoped>
    ul {
        list-style: none;
    }
    li {
        float: left;
        border: 1px solid blue;
        padding: 10px;
    }
</style>
