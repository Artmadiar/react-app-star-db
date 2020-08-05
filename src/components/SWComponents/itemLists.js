import React from 'react';
import ItemList from '../itemList';
import withData from '../HOC/withData';
import SwapiService from '../../services/SwapiService';

const swapi = new SwapiService();

// onItemSelected={this.onItemSelected}

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>
      {fn}
    </Wrapped>
  };
};


const PersonList = withData(
    withChildFunction(ItemList, item => item.name),
  swapi.getAllPeople,
);
const PlanetList = withData(
    withChildFunction(ItemList, item => item.name),
    swapi.getAllPlanets,
);
const StarshipList = withData(
    withChildFunction(ItemList, item => item.name),
    swapi.getAllStarships,
);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
