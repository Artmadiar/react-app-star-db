import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner';
import PlanetView from './PlanetView';
import ErrorView from '../ErrorView';

import './styles.css';

export default class RandomPlanet extends Component {
  swapi = new SwapiService();
  timer;


  static defaultProps = {
    interval: 8000,
  }

  static propTypes = {
    interval: (props, propName, componentName) => {
      const value = props[propName];
      console.log({ props, propName, value });
      if (isNaN(parseInt(value, 10))) {
        return new Error('Random planet: Interval is not a number');
      }
      return null;
    },
  };

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  async nextValue() {
    try {
      const max = 19;
      const randomId = (Math.ceil(Math.random() * max)) + 3;
  
      const planet = await this.swapi.getPlanet(randomId);
      this.setState({
        planet,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({
        error: true,
      });
      clearInterval(this.timer);
    }
  }

  onError() {
    this.setState({
      error: true,
      loading: false,
    });
  }

  componentWillMount() {
    this.nextValue();

    this.timer = setInterval(() => {
      this.nextValue();
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      loading,
      planet,
      error,
    } = this.state;

    if (error) {
      return <ErrorView />;
    }

    return (
      <div className="randomPlanet">
        {loading ? <Spinner /> : <PlanetView planet={planet} />}
      </div>
    );
  }
};
