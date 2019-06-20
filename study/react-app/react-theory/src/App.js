import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';

class App extends Component {

  state = {
    cars: [
      {
        name: 'Ford',
        year: 2018
      },
      {
        name: 'Mazda',
        year: 2010
      },
      {
        name: 'BMW',
        year: 2010
      }
    ],
    pageTitle: 'React components',
    showCars: false
  }

  onChangeName(name, index) {
  //  console.log(name, index);
   const car = this.state.cars[index]
   car.name = name
   const cars = [...this.state.cars]
   cars[index] = car
   this.setState({
     cars: cars
   })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  toggleCarsHandle = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  // Стрелочная функция не создает своего контекста,
  // поэтому можно использовать this от внешнего компонента

  // обычна функция создает контекст, и для передачи в нее this, нужно сделать bind(this)
  //  либо переделать фунцию в стрелочную

  deleteHandler(index){
    // console.log('delete', this);
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({
      cars: cars
    })
  }

  render(){

    // const cars = this.state.cars

    let cars = null

    if (this.state.showCars){
      cars = this.state.cars.map((car, i) => {
        return (
          <Car 
            key={i}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, i)}
            onChangeName={(event) => this.onChangeName(event.target.value, i)}
          />
        )
      })
    }

    return (
      <div className="App">

        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput}/>

        <button onClick={this.toggleCarsHandle}>
          Toggle cars
        </button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: 20
        }}>
          { cars }
        </div>
      </div>
    )
  }
}

export default App;
