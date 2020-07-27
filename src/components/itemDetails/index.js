import React, { Component, Children, cloneElement } from 'react';
import SwapiService from '../../services/SwapiService';
import ErrorView from '../ErrorView';
import './styles.css';

const Record = ({ item, field, label }) => {
  return (
    <li key={field}>
      <span> {label}: </span>
      <span> {item[field]} </span>
    </li>
  )
};

export { Record };

export default class PersonDetails extends Component {
  state = {
    itemData: null,
    error: false,
  };

  swapi = new SwapiService();

  componentDidUpdate( prevProps, prevState) {    
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) return;

    this.props.getItemData(itemId)
      .then((itemData) => {
        this.setState({
          itemData,
          error: false,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          error: true,
        });
      })
  }

  render() {
    if (this.state.error) {
      return <ErrorView />;
    }

    if (!this.state.itemData) {
      return <div>
        Select an item from the list
      </div>
    }

    const { itemData } = this.state;

    return (
      <div className="itemDetails">
        <img src={`https://starwars-visualguide.com/assets/img/${this.props.entity}/${itemData.id}.jpg`} alt="" className={this.props.entity} />
        <div>
          <h2>{itemData.name}</h2>
          <ul>
            {Children.map(this.props.children, (child) => {
              return cloneElement(child, { item: itemData });
            })}
          </ul>
        </div>
      </div>
    );
  }
};
