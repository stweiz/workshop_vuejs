<template>
    <div>
        <span v-once>{{noChange}}</span>
        <button v-on:click="changeNotChangeable">Change that</button>
        <br>
        <span>{{change}}</span>
        <button v-on:click="changeChangeable">Change that</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                noChange: "This will never change",
                change: "This will change",
            }
        },
        methods: {
            changeChangeable: function () {
                this.change = "This is changed"
            },
            changeNotChangeable: function () {
                this.noChange = "This can't be changed"
            }
        }
    }
</script>

<style scoped>
</style>
