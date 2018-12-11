<template>
    <div>
        <input v-model="message">
        <button v-on:click="reverseMessage">Reverse message in input</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "What's up, doc?",
            }
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }
</script>

<style scoped>
</style>
