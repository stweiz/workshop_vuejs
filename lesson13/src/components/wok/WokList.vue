<template>
    <b-container>
        <b-col><h2>This is the list of available woks:</h2></b-col>
        <b-row>
            <ul>
                <b-col cols="10">
                    <li v-for="wok in wokList" v-bind:key="wok.id">
                        <Wok v-bind:wok="wok"/>
                    </li>
                </b-col>
            </ul>
        </b-row>
        <b-row>
            <b-col cols="4">
                <button v-on:click="getWokListStandard">Woks</button>
            </b-col>
            <b-col cols="4">
                <button v-on:click="getWokListSpecialCustomer">Woks for special customer</button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Wok from './Wok'

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
            this.axios.get(wokJsonUrl).then((response) => {
                this.wokList = response.data["woks"]
            })
        },
        methods: {
            // JSON.get() doesn't work, because it binds to the parent scope implicitly and this doesn't work in ES6/2015
            getWokListStandard: function () {
                // Use the imported library and call its function to get a JSON by a HTTP request
                this.axios.get(wokJsonUrl).then((response) => {
                    this.wokList = response.data["woks"]
                })
            },
            getWokListSpecialCustomer: function () {
                // Or make axios available in your global Vue.js scope by adding it to the "Vue.prototype" in the main.js
                this.$http.get(specialCustomerWokJsonUrl).then((response) => {
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
