<template>
    <div>
        <div class="wok">
            {{this.standardWok.name}}<br/>
            ID: {{this.standardWok.id}}<br/>
            {{this.standardWok.price}}
        </div>
        <!-- TODO Create second wok -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                standardWok: {id: 1, name: "Standard Wok", price: "€20.00"}
                // TODO Create second wok
            }
        }
    }
</script>

<style scoped>
    .wok {
        padding: 10px;
        color: white;
        background-color: darkgreen;
        font-size: 20px;
        font-weight: bold;
        border: 1px solid black;
        width: 150px;
        height: 150px;
        margin-bottom: 10px;
    }
</style>
