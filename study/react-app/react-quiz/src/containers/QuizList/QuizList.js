import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loader from './../../components/UI/Loader/Loader';
import classes from './QuizList.scss';
import { fetchQuizes } from '../../store/actions/quiz';

class QuizList extends Component {

  renderQuizes() {
    return this.props.quizes.map((quiz,index) => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
  }

  componentWillMount() {
    this.props.fetchQuizes()
  }

  componentDidMount (){
    // axios.get('https://react-quiz-7a01f.firebaseio.com/quiz.json').then(response => {
    //   console.log(response); 
    // })
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          {
            this.props.loading && this.props.quizes.length !== 0
            ? <Loader />
            : <ul>{this.renderQuizes()}</ul>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchQuizes: () => dispatch( fetchQuizes() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList)