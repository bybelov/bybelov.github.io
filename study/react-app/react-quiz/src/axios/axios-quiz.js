import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-7a01f.firebaseio.com/'
})