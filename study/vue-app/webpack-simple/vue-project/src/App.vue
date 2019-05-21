<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-car
      v-bind:carName="carName"
      v-bind:carYear="carYear"
    ></app-car>
  </div>
</template>

<script>
import Car from './Car'

export default {

  data () {
    return {
      carName: 'Ford from parent',
      carYear: 2015
    }
  },
  components:{
    appCar: Car
  }
}
</script>
