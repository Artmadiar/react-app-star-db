import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';
import './styles.css';

export default class ItemList extends Component {
  state = {
    peopleList: null,
    loading: true,
  };

  swapi = new SwapiService();

  componentDidMount() {
    this.swapi.getAllPeople()
      .then((people) => {
        this.setState({
          peopleList: people,
          loading: false,
        })
      })
      .catch();
  }

  render() {
    const { peopleList, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="itemList">
        {peopleList.map((person) => <li key={person.id} onClick={() => this.props.onItemSelected(person.id)} >
          {person.name}
        </li>
        )}
      </ul>
    );
  }
};
