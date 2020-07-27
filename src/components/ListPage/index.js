import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import ErrorView from '../ErrorView';

import './styles.css';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
    error: false,
  }

  swapi = new SwapiService();

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorView />;
    }

    return <div className="appBody">
      <div className="left">
        <ItemList onItemSelected={this.onItemSelected} getListData={this.props.getListData} entity={this.props.entity} />
      </div>
      <div className="right">
        <ItemDetails itemId={this.state.selectedItem} getItemData={this.props.getItemData} entity={this.props.entity} />
      </div>
    </div>
  }
}