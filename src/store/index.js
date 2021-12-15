import { createStore } from 'vuex';
import axios from 'axios';
import { allCountries, searchCountries, regionCountries } from '@/constant/api';

const store = createStore({
  state: {
    countries: [],
    keyword: '',
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
  },
  actions: {
    getAllCountries({ commit }) {
      axios
        .get(allCountries)
        .then((response) => {
          commit('getAllCountries', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRegionCountries({ commit, dispatch }, region) {
      console.log(region);
      if (region === 'all') {
        dispatch('getAllCountries');
      } else {
        axios
          .get(`${regionCountries}${region}`)
          .then((response) => {
            commit('getRegionCountries', response.data);
          })
          .catch((error) => {
            alert('Region not found !');
          });
      }
    },
  },
});

export default store;
