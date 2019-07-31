import React, { Component } from 'react';
import classes from './Quiz.scss';
import ActiveQuiz from './../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from './../../components/FinishedQuiz/FinishedQuiz'
import axios from '../../axios/axios-quiz'
import Loader from './../../components/UI/Loader/Loader'

class Quiz extends Component {

  state = {
    results: {}, // { [id]: success error }
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success'  'error'}
    quiz: [],
    loading: true
  }

  onAnswerClickHandler = (answerId) => {
    // console.log('Answer Id: ', answerId);

    // защита от повторного клика, после правильного ответа
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      // если ответ правильный, то не даем кликать
      if (this.state.answerState[key] === 'success'){
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId){

      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results: results
      })

      const timeout = window.setTimeout(()=>{
        if (this.isQuizFinished()) {
          console.log('Finished');

          this.setState({
            isFinished: true
          })

        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout);
      }, 1000 )

    } else{

      results[question.id] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        results: results
      })

    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  goToHomePage = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`/quizes/${this.props.match.params.id}.json`)
      const quiz = response.data
      this.setState({
        quiz,
        loading: false
      })
    } catch (error) {
      console.log(error)
    }
  }

  render(){

    console.log(this.props);

    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {
            this.state.loading
              ? <Loader />
              : this.state.isFinished 
                ? <FinishedQuiz
                    results={this.state.results}
                    quiz={this.state.quiz}
                    onRetry={this.retryHandler}
                  />
                : <ActiveQuiz 
                    answers={this.state.quiz[this.state.activeQuestion].answers}
                    question={this.state.quiz[this.state.activeQuestion].question}
                    onAnswerClick={this.onAnswerClickHandler}
                    quizLength={this.state.quiz.length}
                    answerNumber={this.state.activeQuestion + 1}
                    state={this.state.answerState}
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

export default Quiz