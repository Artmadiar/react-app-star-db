import React from 'react';
import ItemList from '../itemList';
import withData from '../HOC/withData';
import SwapiService from '../../services/SwapiService';

const swapi = new SwapiService();

// onItemSelected={this.onItemSelected}

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return <Wrapped {...props}>
      {fn}
    </Wrapped>
  };
};


const PersonList = withData(swapi.getAllPeople)(
  withChildFunction(item => item.name)(
    ItemList
  )
);
const PlanetList = withData(swapi.getAllPlanets)(
  withChildFunction(item => item.name)(
    ItemList
  )
);

const StarshipList = withData(swapi.getAllStarships)(
  withChildFunction(item => item.name)(
    ItemList
  )
);


export {
  PersonList,
  PlanetList,
  StarshipList,
};
