import React, { Component } from 'react';

import Row from '../../Row';
import { PlanetList } from '../itemLists';
import { PlanetDetails } from '../details';

export default class PlanetPage extends Component {
  state = {
    itemId: null,
  };

  onItemSelected = (itemId) => {
    this.setState({
      itemId,
    })
  }

  render() {
    const list = <PlanetList onItemSelected={this.onItemSelected} />;
    const details = <PlanetDetails itemId={this.state.itemId} />;

    return (
      <Row left={list} right={details} />
    )
  }

}
