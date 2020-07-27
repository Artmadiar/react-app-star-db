import React, { Component } from 'react';
import './styles.css';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ErrorView from '../ErrorView';
import PeoplePage from '../PeoplePage';
// import PlanetDetails from '../planetDetails';
// import StarshipDetails from '../starshipDetails';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    error: false,
  };

  togglePlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  // global Error boundary
  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorView />;
    }

    return (
      <div className="app">
        <Header />
        {this.state.showRandomPlanet && <RandomPlanet />}
        <button type="button" className="btn" onClick={this.togglePlanet} >{this.state.showRandomPlanet ? 'hide' : 'show'} random planet</button>
        <PeoplePage />
        {/* <PlanetPage />
        <StarshipPage /> */}
      </div>
    );
  }
};
