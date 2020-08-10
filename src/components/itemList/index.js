import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class ItemList extends Component {
  defaultProps = {
    onItemSelected: () => {},
  }

  static propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
  }

  render() {
    const { data: list, children: presentItemInList } = this.props;

    return (
      <ul className="itemList">
        {list.map((item) => <li key={item.id} onClick={() => this.props.onItemSelected(item.id)} >
          {presentItemInList(item)}
        </li>
        )}
      </ul>
    );
  }
};
