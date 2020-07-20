import React, { Fragment } from 'react';

export default ({ planet: { id, name, population, rotationPeriod, diameter } }) => {
  return <Fragment>
    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="" />
    <div>
      <h2>{name}</h2>
      <ul>
          <li>
            <span>
              Population: 
            </span>
            <span>
              {population}
            </span>
          </li>
          <li>
            <span>
              Rotation period: 
            </span>
            <span>
              {rotationPeriod}
            </span>
        </li>
        <li>
          <span>
            Diameter: 
          </span>
          <span>
            {diameter}
          </span>
        </li>
      </ul>
    </div>
  </Fragment>
};
