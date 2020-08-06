import React, { Component, Children, cloneElement } from 'react';
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

export default class ItemDetails extends Component {
  state = {
    data: null,
  }
  
  componentDidUpdate( prevProps, prevState) {
    if (
        this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData
      ) {
        this.updateData();
    }
  }

  updateData() {
    const { getData, itemId } = this.props;
    getData(itemId)
    .then((data) => {
      this.setState({ data });
    })
    .catch((err) => {
      console.error(err);
      this.setState({ data: null });
    })
  }

  componentDidMount() {
    this.updateData();
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>
        Select an item from the list
      </div>
    }

    return (
      <div className="itemDetails">
        <img src={`https://starwars-visualguide.com/assets/img/${this.props.entity}/${data.id}.jpg`} alt="" className={this.props.entity} />
        <div>
          <h2>{data.name}</h2>
          <ul>
            {Children.map(this.props.children, (child) => {
              return cloneElement(child, { item: data });
            })}
          </ul>
        </div>
      </div>
    );
  }
};
