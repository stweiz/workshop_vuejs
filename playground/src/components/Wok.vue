<template>
  <div class="wok">
      {{this.wok.name}}<br/>
      ID: {{this.wok.id}}<br/>
      {{this.wok.price}}

  </div>
</template>

<script>
  export default {
    name: 'Wok',
    props: ['wok']
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
