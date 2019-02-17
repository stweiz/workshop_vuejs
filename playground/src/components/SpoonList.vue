<template>
    <b-container>
        <b-col><h2>This is the list of available Spoons:</h2></b-col>
        <b-row>
            <ul>
                <b-col cols="10">
                    <li v-for="spoon in spoonList" v-bind:key="spoon.id">
                        <Spoon v-bind:spoon="spoon"/>
                    </li>
                </b-col>
            </ul>
        </b-row>
    </b-container>
</template>

<script>
    import Spoon from './Spoon'

    const spoonJsonUrl = "https://raw.githubusercontent.com/stweiz/workshop_vuejs/master/docs/spoons.json";

    export default {
        name: 'SpoonList',
        components: {
            Spoon
        },
        data() {
            return {
                spoonList: {}
            }
        },
        created() {
            this.$http.get(spoonJsonUrl).then((response) => {
                this.spoonList = response.data["spoons"]
            })
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
