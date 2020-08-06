import React, { Component } from 'react';

import Spinner from '../../spinner';
import ErrorView from '../../ErrorView';

// import SwapiService from '../../../services/SwapiService';
// const swapi = new SwapiService();

export default (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    };

    fetchData() {
      getData(this.props.itemId)
        .then((data) => {
          this.setState({
            data,
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
  
    componentDidMount() {
      this.fetchData();
    }

    render() {
      const { data, error, loading } = this.state;

      if (error) {
        return <ErrorView />;
      }
  
      if (loading) {
        return <Spinner />;
      }
    
      return <View {...this.props} data={data} />;
    }
  }
};
