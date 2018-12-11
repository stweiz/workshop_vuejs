<template>
    <div>
        <div class="wok">
            <p>{{standardWok.name}}</p>
            <p v-html="standardWok.id"></p> <!-- Instead of mustache, we can also use the v-html directive -->
            <span v-html="standardWok.price"></span>
        </div>
        <div class="wok" v-if="!invisibleWok.visible">
            <p>{{invisibleWok.name}}</p>
            <p>ID: {{invisibleWok.id}}</p>
            <p>{{invisibleWok.price}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                standardWok: {id: 1, name: "Standard Wok", price: "€20.00"},
                invisibleWok: {id: 2, name: "Invisible Wok", price: "€30.00", visible: false}
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
