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
            reverseMessage: function () {
                return this.message.split('').reverse().join('')
            }
        }
    }
</script>

<style scoped>
</style>
