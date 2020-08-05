import React from 'react';
import {SwapiServiceConsumer} from '../../swapiServiceContext';


export default (View) => {
  return (props) => (
    <SwapiServiceConsumer>
      {
        (swapi) => {
          return <View {...props} swapi={swapi} />
        }
      }
    </SwapiServiceConsumer>
  );
}
