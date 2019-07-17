import React from 'react';

export default class ErrorBoundary extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.setState.hasError){
      return <h2 >Error</h2>
    }

    return this.props.children
  }

}