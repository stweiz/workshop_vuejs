<template>
    <div class="wokList">
        <h2>This is the list of available woks:</h2>
        <Wok v-for="wok in wokList"
             v-bind:key="wok.id"
             v-bind:wok="wok"/>
        <!-- TODO Create two buttons, to switch between the data of both JSONs, to show different woks -->
    </div>
</template>

<script>
    import Wok from './Wok'

    // (Method 3) If you want to use "axios" in this component only
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
        // "created" works like "computed", but is called after the instance has finished processing.
        // So it is evaluated after "computed"
        // The lifecycle hooks are well documented at: https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
        created() {
            axios.get(wokJsonUrl).then((response) => {
                this.wokList = response.data["woks"]
            })
            /*this.axios.get(wokJsonUrl).then((response) => {
                this.wokList = response.data["woks"]
            })*/
            /*this.$http.get(wokJsonUrl).then((response) => {
                this.wokList = response.data["woks"]
            })*/
        },
        methods: {
            // TODO Implement one method, which loads the response of "wokJsonUrl" into wokList
            // and a second method, which loads the response of "specialCustomerWokJsonUrl"
        }
    }

</script>

<style scoped>
    .wokList {
    }
</style>
