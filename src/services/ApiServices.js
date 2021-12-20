import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1';

const baseApi = axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default {
  getCountries() {
    return baseApi.get('/all');
  },
  getCountry(country) {
    return baseApi.get(country);
  },
  getRegion(region) {
    return baseApi.get(`region/${region}`);
  },
};
