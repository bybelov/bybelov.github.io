import axios from '../../axios/axios-quiz';
import {
    FETCH_QUIZES_START,
    FETCH_QUIZES_SUCCESS,
    FETCH_QUIZES_ERROR,
    FETCH_QUIZ_SUCCESS,
    QUIZ_SET_STATE,
    FINISH_QUIZ,
    QUIZ_NEXT_QUESTION,
    QUIZ_RETRY
} from './actionTypes';

export function fetchQuizes(){
  return async dispatch => {

    dispatch(fetchQuizesStart())
    
    try {
      const response = await axios.get('quizes.json')

      const quizes = []
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест #${index + 1}`
        })
      })

      // this.setState({
      //   quizes,
      //   loading: false
      // })

      dispatch(fetchQuizesSuccess(quizes))

      console.log(response.data);
      
    } catch (error) {
      console.log(error);
      dispatch(fetchQuizesError(error))
    }
  }
}

export function fetchQuizeById(quizId){
  return async dispatch =>{
    dispatch(fetchQuizesStart())
    try {
      const response = await axios.get(`/quizes/${quizId}.json`)
      const quiz = response.data
      dispatch(fetchQuizSuccess(quiz))
    } catch (error) {
      // console.log(error)
      dispatch(fetchQuizesError(error))
    }
  }
}

export function fetchQuizSuccess(quiz){
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz
  }
}

export function fetchQuizesStart(){
  return {
    type: FETCH_QUIZES_START
  }  
}

export function fetchQuizesSuccess(quizes){
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes: quizes
  }
}

export function fetchQuizesError(e){
  return {
    type: FETCH_QUIZES_ERROR,
    error: e
  }
}

export function quizSetState(answerSate, results) {
  return {
    type: QUIZ_SET_STATE,
    answerSate,
    results
  }
}

export function finishQuiz() {
  return {
    type: FINISH_QUIZ
  }
}

export function quizNextQuestion(number) {
  return {
    type: QUIZ_NEXT_QUESTION,
    number
  }
}

export function retryQuiz() {
  return {
    type: QUIZ_RETRY
  }
}

export function quizAnswerClick(answerId) {
  return (dispatch, getState) => {
        // console.log('Answer Id: ', answerId);
    const state = getState().quiz
    // защита от повторного клика, после правильного ответа
    if (state.answerState) {
      const key = Object.keys(state.answerState)[0];
      // если ответ правильный, то не даем кликать
      if (state.answerState[key] === 'success'){
        return
      }
    }

    const question = state.quiz[state.activeQuestion]
    const results = state.results

    if (question.rightAnswerId === answerId){

      if (!results[question.id]) {
        results[question.id] = 'success'
      }

      dispatch(quizSetState({ [answerId]: 'success' }, results))

      const timeout = window.setTimeout(()=>{
        if (isQuizFinished(state)) {
          // console.log('Finished');
          dispatch(finishQuiz())
          // this.setState({
          //   isFinished: true
          // })

        } else {
          dispatch(quizNextQuestion(state.activeQuestion + 1))
          // this.setState({
          //   activeQuestion: this.state.activeQuestion + 1,
          //   answerState: null
          // })
        }

        window.clearTimeout(timeout);
      }, 1000 )

    } else{
      results[question.id] = 'error'
      dispatch(quizSetState({ [answerId]: 'error' }, results))
    }
  }
}

function isQuizFinished(state) {
  return state.activeQuestion + 1 === state.quiz.length
}