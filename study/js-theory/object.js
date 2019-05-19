// Object.create(a,b)
// a - прототип создаваемого объекта
// b - свойства создаваемого объекта

var ford = Object.create({
  calculateDistancePerYear: function () {
    Object.defineProperty(this, 'distancePerYear', {
      value: Math.ceil(this.distance / this.age),
      enumerable: true, // false
      writable: false,
      configurable: false
    })
  }
}, {
  name: {
    value: 'Ford',
    enumerable: true,
    writable: false,
    configurable: true
  },
  model: {
    value: 'Focus',
    enumerable: true,
    writable: false,
    configurable: true
  },
  year: {
    value: 2015,
    enumerable: true,
    writable: false,
    configurable: true
  },
  distance: {
    value: 120500,
    enumerable: true,
    writable: true,
    configurable: true
  },
  age:{
    enumerable: true,
    get: function(){
      console.log('Получаем возраст')
      return new Date().getFullYear() - this.year
    },
    set: function(){
      console.log('Устанавливаем значение возраста')
    }
  }
})

console.log(ford);

ford.calculateDistancePerYear()

// for(var key in ford ){
//   if(ford.hasOwnProperty(key)){
//     console.log(key, ford[key])
//   }
// }

// ну идет по прототипу, только по собственным ключам объекта
Object.keys(ford).forEach(function(key){
  console.log(key, ford[key])
})