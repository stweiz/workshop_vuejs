<template>
    <div>
        <h2>This is the list of available woks:</h2>
        <ul class="wok-list">
            <li v-for="wok in wokList" v-bind:key="wok.id">
                <Wok v-bind:wok="wok"/>
            </li>
        </ul>
        <br style="clear: both"/>
        <button v-on:click="getWokListStandard">getWokListStandard</button>
        <br>
        <button v-on:click="getWokListSpecialCustomer">getWokListSpecialCustomer</button>
    </div>
</template>

<script>
    import Wok from './Wok'
    import axios from 'axios'

    const wokJsonUrl = "https://raw.githubusercontent.com/stweiz/workshop_vuejs/master/docs/woks.json";
    const specialCustomerWokJsonUrl = "https://raw.githubusercontent.com/stweiz/workshop_vuejs/master/docs/woks_special_customer.json";

    export default {
        name: 'WokList',
        components: {
            Wok
        },
        data() {
            return {
                wokList: {}
            }
        },
        created() {
            axios.get(wokJsonUrl).then((response) => {
                this.wokList = response.data["woks"]
            })
        },
        methods: {
            getWokListStandard: function () {
                axios.get(wokJsonUrl).then((response) => {
                    this.wokList = response.data["woks"]
                })
            },
            getWokListSpecialCustomer: function () {
                axios.get(specialCustomerWokJsonUrl).then((response) => {
                    this.wokList = response.data["woks"]
                })
            }
        },
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
