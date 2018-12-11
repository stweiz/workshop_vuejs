<template>
    <div class="wokSpoon"> <!-- 5 step -->
        SPOON
        ID: {{this.spoonId}} <br/> <!-- 6 step -->
        Name: {{this.spoonName}} <br/> <!-- 7 step -->
    </div>
</template>

<script>
    export default {
        name: "WokSpoon",
        props: ["spoonId", "spoonName"] // 8 step
        /* TODO bonus step
        props: {
            spoonId: Number,
            spoonName: String
        }
        */
    }
</script>

<style scoped>
    /* 4 step */
    .wokSpoon {
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
