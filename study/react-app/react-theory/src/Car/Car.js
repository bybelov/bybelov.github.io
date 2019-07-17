import React from 'react'
// import Radium from 'radium'
import classes from './Car.scss'
import withClass from './../hoc/withClass';
import PropTypes from 'prop-types';

class Car extends React.Component {

  // componentWillReceiveProps(nextProps) {
  //   console.log('Car componentWillReceiveProps', nextProps);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Car shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.name.trim() !== this.props.name.trim() 
  // }

  // componentWillUpdate(nextProps, nextState){
  //   console.log('Car componentWillUpdate', nextProps, nextState);
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('Car getDerivedStateFromProps', nextProps, prevState);
  //   return prevState
  // }

  // componentDidUpdate(){
  //   console.log('Car componentDidUpdate');
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log('Car getSnapshotBeforeUpdate');
  // }

  // componentWillUnmount() {
  //   console.log('Car componentWillUnmount');
  // }

  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if(this.props.index === 1){
      // this.inputRef.focus()
      this.inputRef.current.focus()
    }
  }

  render() {

    // console.log('Car render');


    // if (Math.random() > 0.7 ){
    //   throw new Error('Car random failed');
    // }

    const inputClasses = [classes.input]
    if(this.props.name !== ''){
      inputClasses.push(classes.green)
    }else{
      inputClasses.push(classes.red)
    }
  
    if(this.props.name.length > 4){
      inputClasses.push(classes.bold)
    }
  
    // const style = {
    //   border: '1px solid #ccc',
    //   boxShadow: '0 4px 5px rgba(0,0,0,0.15)',
    //   // ':hover': {
    //   //   border: '1px solid #aaa',
    //   //   boxShadow: '0 4px 15px rgba(0,0,0,.25)',
    //   //   cursor: 'pointer'
    //   // }
    // }
    return (
      <React.Fragment>
        <p>Car name: {this.props.name}</p>
        <b>Year: {this.props.year}</b>
        <br/>
        <input
          // ref={ (inputRef) => this.inputRef = inputRef }
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
        {/* <button onClick={props.onChangeTitle}>Click</button> */}
      </React.Fragment>
    )
  }
} 

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete:  PropTypes.func
}

export default withClass(Car, classes.Car)