<template>
    <b-container class="wok">
        <b-row>
            <b>{{this.wok.name}}</b>
        </b-row>
        <b-row>
            ID: {{this.wok.id}}
        </b-row>
        <b-row align-h="end">
            EUR {{this.wok.price | currency}}
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
        name: 'Wok',
        props: ['wok'],
        methods: {
            addToCart: function () {
                this.$store.dispatch('addItem', this.wok)
            }
        },
        filters: {currency}
    }
</script>

<style scoped>
</style>
