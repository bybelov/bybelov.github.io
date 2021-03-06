import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from './../../components/FinishedQuiz/FinishedQuiz'
import Loader from './../../components/UI/Loader/Loader'
import {connect} from 'react-redux'
import { fetchQuizeById, quizAnswerClick, retryQuiz } from '../../store/actions/quiz';

class Quiz extends Component {

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  componentWillUnmount() {
    this.props.retryQuiz()
  }

  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id)
  }

  render(){

    console.log(this.props);

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {
            this.props.loading || !this.props.quiz
              ? <Loader />
              : this.props.isFinished 
                ? <FinishedQuiz
                    results={this.props.results}
                    quiz={this.props.quiz}
                    onRetry={this.props.retryQuiz}
                  />
                : <ActiveQuiz 
                    answers={this.props.quiz[this.props.activeQuestion].answers}
                    question={this.props.quiz[this.props.activeQuestion].question}
                    onAnswerClick={this.props.quizAnswerClick}
                    quizLength={this.props.quiz.length}
                    answerNumber={this.props.activeQuestion + 1}
                    state={this.props.answerState}
                  />
          }
          <br/>
          <br/>
          <button onClick={this.goToHomePage}>На главную страницу</button>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    loading: state.quiz.loading,
    results: state.quiz.results, // { [id]: success error }
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState, // { [id]: 'success'  'error'}
    quiz: state.quiz.quiz
  }
}

// возвращаем новые action creator-ы

function mapDispatchToProps(dispatch){
  return{
    fetchQuizById: id => dispatch(fetchQuizeById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)