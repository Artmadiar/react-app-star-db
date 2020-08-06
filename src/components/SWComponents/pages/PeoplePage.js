import React, { Component } from 'react';

import Row from '../../Row';
import { PersonList } from '../itemLists';
import { PersonDetails } from '../details';

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
    const list = <PersonList onItemSelected={this.onItemSelected} />;
    const details = <PersonDetails itemId={this.state.itemId} />;

    return (
      <Row left={list} right={details} />
    )
  }

}
