import React, { Component } from 'react';
import './styles.css';

export default class ItemList extends Component {
  state = {

  };

  render() {
    return (
      <ul className="itemList">
        <li>Person 1</li>
        <li>Person 2</li>
        <li>Person 3</li>
        <li>Person 4</li>
        <li>Person 5</li>
      </ul>
    );
  }
};
