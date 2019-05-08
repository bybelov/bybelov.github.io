const createCar = (name, model) => ({name, model})

const ford = createCar('Ford', 'Mondeo')

console.log(ford);

const yearField = 'year'

const bmw = {
  name: 'BMW',
  ['model']: 'X6 Sport',
  [yearField]: 2018,
  logFields(){
    const {name, model, year} = this
    console.log(name, model, year)
  }
}

console.log(bmw)
bmw.logFields()

// const year = bmw.year
const {year} = bmw
console.log(year)
