<template>
    <b-container>
        <b-col><h2>This is the list of available Spoons:</h2></b-col>
        <b-row>
            <ul>
                <b-col cols="10">

                </b-col>
            </ul>
        </b-row>
    </b-container>
</template>

<script>
    const spoonJsonUrl = "https://raw.githubusercontent.com/stweiz/workshop_vuejs/master/docs/spoons.json";

</script>

<style scoped>
    ul {
        list-style: none;
    }

    li {
        float: left;
        border: 1px solid blue;
        padding: 10px;
    }
</style>
