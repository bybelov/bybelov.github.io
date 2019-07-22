import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" render={ ()=> (<h1>Home page</h1>) } exact />
        <Route path="/quiz" component={Quiz} />
        <Route path="/about" render={ ()=> (<h1>About page</h1>) } />
      </Layout>
    )
  }
}

export default App;
