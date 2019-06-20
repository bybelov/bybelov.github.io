import React from 'react'
import Radium from 'radium'
import classes from './Car.scss'

const Car = props => {

  const inputClasses = [classes.input]
  if(props.name !== ''){
    inputClasses.push(classes.green)
  }else{
    inputClasses.push(classes.red)
  }

  if(props.name.length > 4){
    inputClasses.push(classes.bold)
  }

  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px rgba(0,0,0,0.15)',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px rgba(0,0,0,.25)',
      cursor: 'pointer'
    }
  }

  return (
    <div className={classes.Car} style={style}>
      <p>Car name: {props.name}</p>
      <b>Year: {props.year}</b>
      <br/>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
      {/* <button onClick={props.onChangeTitle}>Click</button> */}
    </div>
  )
}

export default Radium(Car)