<template>
    <div class="wok">
        WOK<br/>
        ID: {{this.wokId}}<br>
        Name: {{this.wokName}}
    </div>
</template>

<script>
    export default {
        name: 'Wok',
        props: ['wokId', "wokName"]
    }
</script>

<style scoped>
    .wok {
        color: white;
        background-color: darkgreen;
        font-size: 20px;
        font-weight: bold;
        border: 1px solid black;
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
    }
</style>
