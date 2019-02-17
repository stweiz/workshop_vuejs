<template>
    <div>
        <div class="wok">
            {{this.standardWok.name}}<br/>
            ID: {{this.standardWok.id}}<br/>
            {{this.standardWok.price}}
        </div>
        <!-- TODO solution: Create second wok -->
                <div class="wok">
                    {{this.premiumWok.name}}<br/>
                    ID: {{this.premiumWok.id}}<br/>
                    {{this.premiumWok.price}}
                </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                /* TODO solution: Create second wok */
                    standardWok: {id: 1, name: "Standard Wok", price: "€20.00"},
                    premiumWok: {id: 2, name: "Premium Wok", price: "€200.00"}

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
