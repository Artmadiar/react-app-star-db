import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import ErrorView from '../ErrorView';

import './styles.css';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
    error: false,
  }

  swapi = new SwapiService();

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorView />;
    }

 }
}