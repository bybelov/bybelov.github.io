<template>
  <div>
    <h1>Parent: {{ carName }}</h1>

    <app-counter></app-counter>

    <app-car
      v-bind:carName="carName"
      v-bind:carYear="carYear"
      v-bind:changeFunc="changeNameAudi"
      v-on:nameChanged="carName = $event"
      v-on:counterUpdated="counter = $event"
    ></app-car>

    <app-bus busName="Mersedes">
      <h1 slot="title">{{ busName }}</h1>
      <h2 slot="text">Mersedes + html</h2>
    </app-bus>


  </div>
</template>

<script>
import Bus from './Bus'
import Car from './Car'
import Counter from './Counter'

export default {

  data () {
    return {
      busName: 'Mersedes from App',
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
    appBus: Bus,
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
