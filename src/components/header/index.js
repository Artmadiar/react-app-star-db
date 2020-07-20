import React, { Component } from 'react';
import './styles.css';

export default class Header extends Component {
  state = {

  };

  render() {
    return (
      <div className="header d-flex">
        <h3>
          <a href="#">Star DB</a>
        </h3>
        <ul className="d-flex">
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Planets</a>
          </li>
          <li>
            <a href="#">Starships</a>
          </li>
        </ul>
      </div>
    );
  }
};
