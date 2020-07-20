import React, { Component } from 'react';
import './styles.css';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
// import PlanetDetails from '../planetDetails';
// import StarshipDetails from '../starshipDetails';

export default class App extends Component {
  state = {

  };

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />

        <div className="appBody">
          <div className="left">
            <ItemList />
          </div>
          <div className="right">
            <PersonDetails />
          </div>
        </div>
        {/* <PlanetDetails />
        <StarshipDetails /> */}
      </div>
    );
  }
};
