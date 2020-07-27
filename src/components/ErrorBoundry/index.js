import React, { Component } from 'react';
import ErrorView from '../ErrorView';

export default class ErrorBoundry extends Component {
  state = {
    error: false,
  }
  
  render() {
    if (this.state.error) {
      return <ErrorView />;
    }

    return this.props.children;
  }

  componentDidCatch(err, info) {
    this.setState({ error: true });
  }
}
