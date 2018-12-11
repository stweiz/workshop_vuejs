<template>
    <div>
        <input v-model="message">
        <button v-on:click="reverseMessage">Reverse message in input</button>

        <!-- TODO: If a new button is clicked, calculate a sum of two variables, which a user entered in two input fields and show the result in a new span. -->

    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "What's up, doc?"
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
