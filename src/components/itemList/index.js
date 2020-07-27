import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorView from '../ErrorView';
import './styles.css';

export default class ItemList extends Component {
  state = {
    list: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { getListData } = this.props;
    getListData()
      .then((data) => {
        this.setState({
          list: data,
          loading: false,
        })
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          error: true,
          loading: false,
        });
      });
  }

  presentItemInList = (item) => {
    switch (this.props.entity) {
      case 'characters':
        return `${item.name} ${item.birthYear}`;
      case 'planets':
        return `${item.name} ${item.diameter}`;
      case 'starships':
        return `${item.name} ${item.model}`;
        default:
          return `${item.name}`;
    }
  }

  render() {
    const { list, error, loading } = this.state;

    if (error) {
      return <ErrorView />;
    }

    if (loading) {
      return <Spinner />;
    }

    return (
      <ul className="itemList">
        {list.map((item) => <li key={item.id} onClick={() => this.props.onItemSelected(item.id)} >
          {this.presentItemInList(item)}
        </li>
        )}
      </ul>
    );
  }
};
