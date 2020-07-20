import React, { Component } from 'react';
import './styles.css';

export default class RandomPlanet extends Component {
  state = {

  };

  render() {
    return (
      <div className="randomPlanet">
        <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="" />
        <div>
          <h2>Planet 0</h2>
          <ul>
              <li>
                <span>
                  Population: 
                </span>
                <span>
                  0
                </span>
              </li>
              <li>
                <span>
                  Rotation period: 
                </span>
                <span>
                  0
                </span>
            </li>
            <li>
              <span>
                Diameter: 
              </span>
              <span>
                0
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
