<template>
    <b-container class="spoon">
        <b-row>
            <b>{{this.spoon.name}}</b>
        </b-row>
        <b-row>
            Material: {{this.spoon.material}}
        </b-row>
        <b-row>
            ID: {{this.spoon.id}}
        </b-row>
        <b-row align-h="end">
            EUR {{this.spoon.price}}
        </b-row>
        <b-row align-h="end" align-v="end">
            <button v-on:click="addToCart">
                <font-awesome-icon icon="shopping-cart"/>
            </button>
        </b-row>
    </b-container>
</template>

<script>
    import currency from '../filters/currency'

    export default {
        name: 'Spoon',
        props: ['spoon'],
        methods: {
            addToCart: function () {
                this.$store.dispatch('addItem', this.spoon)
            }
        },
        filters: {currency}
    }
</script>

<style scoped>
</style>
