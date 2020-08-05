import React from 'react';
import ItemDetails, { Record } from '../itemDetails';
import withSwapiContext from '../HOC/withSwapiService';

// TODO: we should get itemId from another component


const PersonDetailsPure = ({ itemId, swapi, ...rest }) => {
  return (
    <ItemDetails itemId={itemId} entity='characters' {...rest} getData={swapi.getPerson} >
      <Record key="name" field="name" label="Name" />
      <Record key="gender" field="gender" label="Gender" />
      <Record key="birthYear" field="birthYear" label="Birth year" />
      <Record key="eyeColor" field="eyeColor" label="Eye color" />
    </ItemDetails>
  );
};

export const PlanetDetailsPure = ({ itemId, swapi, ...rest }) => {
  return (
    <ItemDetails itemId={itemId} entity='planets' {...rest} getData={swapi.getPlanet} >
      <Record key="name" field="name" label="Name" />
      <Record key="population" field="population" label="Population" />
      <Record key="rotationPeriod" field="rotationPeriod" label="Rotation period" />
      <Record key="diameter" field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

export const StarshipDetailsPure = ({ itemId, swapi, ...rest }) => {
  return (
    <ItemDetails itemId={itemId} entity='starships' {...rest} getData={swapi.getStarship} >
      <Record key="name" field="name" label="Name" />
      <Record key="model" field="model" label="Model" />
      <Record key="manufacturer" field="manufacturer" label="Manufacturer" />
      <Record key="costInCredits" field="costInCredits" label="Cost in credits" />
      <Record key="length" field="length" label="Length" />
      <Record key="crew" field="crew" label="Crew" />
      <Record key="passengers" field="passengers" label="Passengers" />
      <Record key="cargoCapacity" field="cargoCapacity" label="Cargo capacity" />
    </ItemDetails>
  );
};

export const PersonDetails = withSwapiContext(PersonDetailsPure);
export const PlanetDetails = withSwapiContext(PlanetDetailsPure);
export const StarshipDetails = withSwapiContext(StarshipDetailsPure);


export default {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
