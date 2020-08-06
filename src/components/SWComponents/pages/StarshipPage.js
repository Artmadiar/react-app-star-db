import React, { Component } from 'react';

import Row from '../../Row';
import { StarshipList } from '../itemLists';
import { StarshipDetails } from '../details';

export default class PeoplePage extends Component {
  state = {
    itemId: null,
  };

  onItemSelected = (itemId) => {
    this.setState({
      itemId,
    })
  }

  render() {
    const list = <StarshipList onItemSelected={this.onItemSelected} />;
    const details = <StarshipDetails itemId={this.state.itemId} />;

    return (
      <Row left={list} right={details} />
    )
  }

}
