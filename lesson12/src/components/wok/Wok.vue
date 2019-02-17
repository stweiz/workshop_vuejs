<template>
    <b-container class="wok">
        <b-row>
            <b>{{this.wok.name}}</b>
        </b-row>
        <b-row>
            ID: {{this.wok.id}}
        </b-row>
        <b-row align-h="end">
            EUR {{this.wok.price}}
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'Wok',
        props: ['wok'],
    }
</script>

<style scoped>
</style>
