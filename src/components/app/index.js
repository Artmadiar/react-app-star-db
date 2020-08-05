import React, { Component } from 'react';
import './styles.css';

import SwapiService from '../../services/SwapiService';
import ErrorBoundary from '../ErrorBoundry';
import {SwapiServiceProvider} from '../swapiServiceContext';

import Header from '../header';
import Row from '../Row';
import RandomPlanet from '../randomPlanet';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../SWComponents';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
  };

  swapi = new SwapiService();

  togglePlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      }
    });
  }

  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <SwapiServiceProvider value={this.swapi} >

            <Header />
    
            {this.state.showRandomPlanet && <RandomPlanet />}
            <button type="button" className="btn togglePlanet" onClick={this.togglePlanet} >{this.state.showRandomPlanet ? 'hide' : 'show'} random planet</button>

            <Row
              left={<PersonList />}
              right={<PersonDetails itemId={4} />}
            />
          
          <Row
            left={<PlanetList />}
            right={<PlanetDetails itemId={4} />}
          />
          
          <Row
            left={<StarshipList />}
            right={<StarshipDetails itemId={12} />}
          />

          </SwapiServiceProvider>
        </ErrorBoundary>
    </div>
    );
  }
};
