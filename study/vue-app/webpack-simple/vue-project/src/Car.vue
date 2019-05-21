<template>
  <div class="car">
    <h3>Name: {{ carName }}</h3>
    <p>Year: {{ carYear }}</p>
  </div>
</template>
<script>
export default {
  props: [
    'carName',
    'carYear'
  ]
}
</script>
<style>
  .car{
    border: 1px solid tomato;
    padding: 8px 16px;
  }
  .car h3{
    margin-bottom: 8px;
  }
  .car p{

  }
</style>
