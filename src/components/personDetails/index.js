import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import ErrorView from '../ErrorView';
import './styles.css';

export default class PersonDetails extends Component {
  state = {
    person: null,
    error: false,
  };

  swapi = new SwapiService();

  componentDidUpdate( prevProps, prevState) {    
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;

    this.swapi.getPerson(personId)
      .then((person) => {
        this.setState({
          person,
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

    if (!this.state.person) {
      return <div>
        Select a person from the list
      </div>
    }

    const { person: { id, name, gender, birthYear, eyeColor } } = this.state;

    return (
      <div className="personDetails">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" />
        <div>
          <h2>{name}</h2>
          <ul>
              <li>
                <span>
                  Gender: 
                </span>
                <span>
                  {gender}
                </span>
              </li>
              <li>
                <span>
                Birth year: 
                </span>
                <span>
                  {birthYear}
                </span>
            </li>
            <li>
              <span>
                Eye color:
              </span>
              <span>
                {eyeColor}
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};
