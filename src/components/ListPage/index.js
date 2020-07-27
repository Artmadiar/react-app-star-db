import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import ItemList from '../itemList';
import ItemDetails, { Record } from '../itemDetails';
import ErrorView from '../ErrorView';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

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

    const fields = [
      <Record key="name" field="name" label="name" />
    ];

    switch (this.props.entity) {
      case 'characters':
        fields.push(<Record key="gender" field="gender" label="Gender" />);
        fields.push(<Record key="birthYear" field="birthYear" label="Birth year" />);
        fields.push(<Record key="eyeColor" field="eyeColor" label="Eye color" />);
        break;
      case 'planets':
        fields.push(<Record key="population" field="population" label="Population" />);
        fields.push(<Record key="rotationPeriod" field="rotationPeriod" label="Rotation period" />);
        fields.push(<Record key="diameter" field="diameter" label="Diameter" />);
        break;
      case 'starships':
        fields.push(<Record key="model" field="model" label="Model" />);
        fields.push(<Record key="manufacturer" field="manufacturer" label="Manufacturer" />);
        fields.push(<Record key="costInCredits" field="costInCredits" label="Cost in credits" />);
        fields.push(<Record key="length" field="length" label="Length" />);
        fields.push(<Record key="crew" field="crew" label="Crew" />);
        fields.push(<Record key="passengers" field="passengers" label="Passengers" />);
        fields.push(<Record key="cargoCapacity" field="cargoCapacity" label="Cargo capacity" />);
        break;
      default:
        break;
    }

    const itemList = <ItemList onItemSelected={this.onItemSelected} getListData={this.props.getListData} entity={this.props.entity} />;
    const itemDetails = (
      <ItemDetails itemId={this.state.selectedItem} getItemData={this.props.getItemData} entity={this.props.entity}>
        {fields}
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />;
      </ErrorBoundry>
    );
    // return <Row> {[itemList, itemDetails]} </Row>;
  }
}