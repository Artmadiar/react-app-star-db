import React, { Component } from 'react';
import './styles.css';

export default class ItemList extends Component {
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

ItemList.defaultProps = {
  onItemSelected: () => {},
};
