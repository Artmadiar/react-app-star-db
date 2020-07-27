import React, { Component } from 'react';
import './styles.css';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
import ErrorView from '../ErrorView';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
    error: false,
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  }

  componentDidCatch(error, info) {
    this.setState((state) => {
      return { error: true };
    })
  }

  render() {
    if (this.state.error) {
      return <ErrorView />;
    }

    return <div className="appBody">
      <div className="left">
        <ItemList onItemSelected={this.onPersonSelected} />
      </div>
      <div className="right">
        <PersonDetails personId={this.state.selectedPerson} />
      </div>
    </div>
  }
}