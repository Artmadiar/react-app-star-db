import React, { Component } from 'react';
import './styles.css';

import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import ErrorBoundary from '../ErrorBoundry';
import {SwapiServiceProvider} from '../swapiServiceContext';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import pages, {
  // PeoplePage,
  // PlanetPage,
  // StarshipPage,
} from '../SWComponents/pages';

const swapi = new SwapiService();
const dummySwapi = new DummySwapiService();


export default class App extends Component {
  state = {
    swapi,
  };

  onServiceChange = () => {
    this.setState((state) => {
      const isDummy = !state.dummy;
      const swapiClient = isDummy ? dummySwapi : swapi;

      return {
        dummy: isDummy,
        swapi: swapiClient,
      };
    })
  }

  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <SwapiServiceProvider value={this.state.swapi} >

            <Header onServiceChange={this.onServiceChange} />
    
            <RandomPlanet interval={'a'} />

            <pages.PeoplePage />
            <pages.PlanetPage />
            <pages.StarshipPage />

          </SwapiServiceProvider>
        </ErrorBoundary>
    </div>
    );
  }
};
