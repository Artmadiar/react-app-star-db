export default class DummySwapiService {
  constructor() {
    this._apiUrl = 'https://swapi.dev/api';
  
    this._cache = this._readCache();

    this.isDummy = true;
  }

  _readCache = () => {
    try {
      const data = localStorage.getItem('cache');
      if (!data) {
        return {};
      }

      const json = JSON.parse(data);
      return json;

    } catch (err) {
      console.error('Error Reading cache from local storage', err);
      return {};
    }
  }

  _updateCache = ({ url, data }) => {
    this._cache = this._readCache();
    this._cache[url] = data;
    localStorage.setItem('cache', JSON.stringify(this._cache));
  }


  getResource = async (url) => {
    if (this._cache[url]) {
      return this._cache[url];
    }

    const response = await fetch(`${this._apiUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch resource! Response code: ${response.status}`);
    }

    const data = await response.json();

    this._updateCache({ url, data });

    return data;
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    }
  }
}