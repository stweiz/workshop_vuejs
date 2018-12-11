<template>
    <div>
        <input v-model="message">
        <button v-on:click="reverseMessage">Reverse message in input</button>

        <!-- TODO: If a new button is clicked, calculate a sum of two variables, which a user entered in two input fields and show the result in a new span. -->

        <!-- TODO solution
                <input v-model="varX" type="number">
                <br>
                <span>+</span>
                <input v-model="varY" type="number">
                <span>{{result}}</span>
                <button v-on:click="calculateSum">Calculate sum</button>
        -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "What's up, doc?"
                /* TODO solution: calculate sum
                    message: "What's up, doc?",
                    varX: "",
                    varY: "",
                    result: "This is the result"
                */
            }
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
            /* TODO solution: calculate sum
                reverseMessage: function () {
                    this.message = this.message.split('').reverse().join('')
                },
                calculateSum: function () {
                    this.result = parseInt(this.varX) + parseInt(this.varY)
                }
            */
        }
    }
</script>

<style scoped>
</style>
