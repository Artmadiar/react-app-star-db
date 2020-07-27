import React, { Component } from 'react';
import './styles.css';

import SwapiService from '../../services/SwapiService';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ErrorView from '../ErrorView';
import ListPage from '../ListPage';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    error: false,
  };

  swapi = new SwapiService();

  togglePlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    });
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
        <button type="button" className="btn togglePlanet" onClick={this.togglePlanet} >{this.state.showRandomPlanet ? 'hide' : 'show'} random planet</button>
        <ListPage getListData={this.swapi.getAllPeople} getItemData={this.swapi.getPerson} entity="characters" />
        <ListPage getListData={this.swapi.getAllPlanets} getItemData={this.swapi.getPlanet} entity="planets" />
        <ListPage getListData={this.swapi.getAllStarships} getItemData={this.swapi.getStarship} entity="starships" />
      </div>
    );
  }
};
