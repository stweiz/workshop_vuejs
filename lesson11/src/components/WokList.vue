<template>
    <div class="wokList">
        <h2>This is the list of available woks:</h2>
        <Wok v-for="wok in wokList"
             v-bind:key="wok.id"
             v-bind:wok="wok"/>
        <!-- TODO Create two buttons, to switch between the data of both JSONs, to show different woks -->

        <button v-on:click="getWokListStandard">Woks</button>
        <button v-on:click="getWokListSpecialCustomer">Woks for special customer</button>
    </div>
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
        // "created" works like "computed", but is called after the instance has finished processing.
        // So it is evaluated after "computed"
        // The lifecycle hooks are well documented at: https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
        created() {
            this.axios.get(wokJsonUrl).then((response) => {
                this.wokList = response.data["woks"]
            })
        },
        methods: {
            // TODO Implement one method, which loads the response of "wokJsonUrl" into wokList
            // and a second method, which loads the response of "specialCustomerWokJsonUrl"

            getWokListStandard: function () {
                this.axios.get(wokJsonUrl).then((response) => {
                    this.wokList = response.data["woks"]
                })
            },
            getWokListSpecialCustomer: function () {
                this.axios.get(specialCustomerWokJsonUrl).then((response) => {
                    this.wokList = response.data["woks"]
                })
            }
        }
    }

</script>

<style scoped>
    .wokList {
    }
</style>
