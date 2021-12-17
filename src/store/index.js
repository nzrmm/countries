import { createStore } from 'vuex';
import axios from 'axios';
import { allCountries, regionCountries, detailCountry } from '@/constant/api';

const store = createStore({
  state: {
    countries: [],
    country: null,
    keyword: '',
    isLoading: false,
  },
  getters: {
    countries(state) {
      if (state.keyword == '') {
        return state.countries;
      } else {
        const filterCountries = state.countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(state.keyword.toLowerCase())
        );
        return filterCountries;
      }
    },
    country(state) {
      return state.country;
    },
    keyword(state) {
      return state.keyword;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    getAllCountries(state, data) {
      state.countries = data;
    },
    getSearchCountries(state, data) {
      state.countries = data;
    },
    getRegionCountries(state, data) {
      state.countries = data;
    },
    handleSearchKeyword(state, keyword) {
      state.keyword = keyword;
    },
    getCountryByName(state, keyword) {
      state.country = keyword;
    },
  },
  actions: {
    getAllCountries({ state, commit }) {
      state.isLoading = true;
      axios
        .get(allCountries)
        .then((response) => {
          commit('getAllCountries', response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          state.isLoading = false;
        });
    },
    getRegionCountries({ state, commit, dispatch }, region) {
      if (region === 'all') {
        dispatch('getAllCountries');
      } else {
        state.isLoading = true;
        axios
          .get(`${regionCountries}${region}`)
          .then((response) => {
            commit('getRegionCountries', response.data);
          })
          .catch((error) => {
            alert('Region not found !');
          })
          .finally(() => {
            state.isLoading = false;
          });
      }
    },
    getCountryByName({ state, commit }, name) {
      state.isLoading = true;
      axios
        .get(`${detailCountry}${name}`)
        .then((response) => {
          commit('getCountryByName', response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          state.isLoading = false;
        });
    },
  },
});

export default store;
