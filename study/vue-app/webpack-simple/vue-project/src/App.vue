<template>
  <div>
    <h1>Parent: {{ carName }}</h1>
    <app-car
      v-bind:carName="carName"
      v-bind:carYear="carYear"
      v-bind:changeFunc="changeNameAudi"
      v-on:nameChanged="carName = $event"
    ></app-car>
  </div>
</template>

<script>
import Car from './Car'

export default {

  data () {
    return {
      carName: 'Ford',
      carYear: 2015
    }
  },
  methods:{
    changeNameAudi(){
      this.carName = 'Audi'
    }
  },
  components:{
    appCar: Car
  }
}
</script>
