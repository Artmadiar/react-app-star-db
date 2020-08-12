import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles.css';

import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import ErrorBoundary from '../ErrorBoundry';
import {SwapiServiceProvider} from '../swapiServiceContext';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import pages from '../SWComponents/pages';

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
            <Router>

              <Header onServiceChange={this.onServiceChange} />

              <Route path="/" exact render={() => (<h4 style={{paddingLeft: '15px'}}>Welcome back, padavan!</h4>)} />

              <RandomPlanet />

              <Route path="/people" component={pages.PeoplePage} />
              <Route path="/planets" component={pages.PlanetPage} />
              <Route path="/starships" component={pages.StarshipPage} />

            </Router>
          </SwapiServiceProvider>
        </ErrorBoundary>
    </div>
    );
  }
};
