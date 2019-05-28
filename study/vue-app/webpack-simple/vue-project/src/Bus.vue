<template>
  <div>

    <slot name="title"></slot>
    <hr>
    <hr>
    <slot name="text"></slot>

    <h3>Bus Name: {{ busName }}</h3>
  </div>
</template>
<script>

export default {
  props:{
    busName: {
      type: String,
      default: 'Default name'
    }
  },
  methods: {

  },
  computed:{

  }
}
</script>
<style scoped>
  div{
    border: 1px solid black;
    padding: 10px;
  }
</style>
