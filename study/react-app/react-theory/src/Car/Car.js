import React from 'react'
import Radium from 'radium'
import './Car.css'

const Car = props => {

  const inputClasses = ['input']
  if(props.name !== ''){
    inputClasses.push('green')
  }else{
    inputClasses.push('red')
  }

  if(props.name.length > 4){
    inputClasses.push('bold')
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
    <div className="Car" style={style}>
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