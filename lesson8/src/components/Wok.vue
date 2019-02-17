<template>
    <div>
        <!-- hard to understand -->
        <p>This is the function inside the template:</p>
        <p>{{message.split('').reverse().join('') }}</p>
        <!-- The name says what it can do, but the function itself is in the script block -->
        <p>This is the call of the function reverseMessage in "computed":</p>
        <p>{{reverseMessage}}</p>
        <br>
        <br>
        <p>Calculate 10+20 with a computed function:</p>
        <!-- TODO solution: computed sum calculation -->
                <p>{{varX}}+{{varY}}={{calculateSum}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "What's up, doc?",
                varX: "10",
                varY: "20",
            }
        },
        computed: {
            /* TODO solution: computed sum calculation */
                reverseMessage: function () {
                    return this.message.split('').reverse().join('')
                },
                calculateSum: function () {
                    return parseInt(this.varX) + parseInt(this.varY)
                }
        }
    }
</script>

<style scoped>
</style>
