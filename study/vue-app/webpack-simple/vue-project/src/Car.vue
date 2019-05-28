<template>
  <div class="car">
    <h3>Name: {{ carName }} / {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeName">Change name</button>
    <button @click="changeFunc()">Change from parent</button>
    <button @click="updateCounter()">Update Counter</button>
  </div>
</template>
<script>
import { eventEmitter } from './main'
export default {
  // props: [
  //   'carName',
  //   'carYear'
  // ],
  // props:{
  //   carName: String,
  //   carYear: Number
  // },
  props:{
    carName: {
      type: String,
      // required: true,
      default: 'Default name'
    },
    carYear: Number,
    changeFunc: Function
    // counter: Number
  },
  methods: {
    changeName(){
      this.carName = 'Mazda'
      this.$emit('nameChanged', this.carName)
    },
    updateCounter(){
      // this.$emit('counterUpdated', this.counter + 1)
      eventEmitter.$emit('counterUpdated', 3)
    }
  },
  computed:{
    reverseName(){
      return this.carName.split('').reverse().join('')
    }
  }
}
</script>
<style>
  div{
    border: 2px solid lime;
    padding: 8px 16px;
  }
  .car{
    /* border: 1px solid tomato;
    padding: 8px 16px; */
  }
  .car h3{
    margin-bottom: 8px;
  }
  .car p{

  }
</style>
