import React, { Component } from 'react';
import './styles.css';

export default class PersonDetails extends Component {
  state = {

  };

  render() {
    return (
      <div className="personDetails">
        <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt="" />
        <div>
          <h2>R2D2</h2>
          <ul>
              <li>
                <span>
                  Property: 
                </span>
                <span>
                  Value
                </span>
              </li>
              <li>
                <span>
                Property: 
                </span>
                <span>
                  Value
                </span>
            </li>
            <li>
              <span>
                Property:
              </span>
              <span>
                Value
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
