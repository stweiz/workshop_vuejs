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
    </b-container>
</template>

<script>

</script>

<style scoped>
</style>
