class SwapiService {
  _apiUrl = 'https://swapi.dev/api';

  async getResource(url) {
    const response = await fetch(`${this._apiUrl}${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch resource! Response code: ${response.status}`);
    }

    return response.json();
  }

  getPeople() {
    return this.getResource('/people');
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }

  getPlanets() {
    return this.getResource('/planets');
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  getStarships() {
    return this.getResource('/starships');
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}

const swapi = new SwapiService();

export default swapi;
