import { createStore } from 'vuex';
import axios from 'axios';
import { allCountries, searchCountries } from '@/constant/api';

const store = createStore({
  state: {
    countries: [],
  },
  mutations: {
    getAllCountries(state, data) {
      state.countries = data;
    },
    getSearchCountries(state, data) {
      state.countries = data;
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
    getSearchCountries({ commit, dispatch }, keyword) {
      if (keyword == '') {
        dispatch('getAllCountries');
      } else {
        console.log(keyword);
        axios
          .get(`${searchCountries}${keyword}`)
          .then((response) => {
            commit('getSearchCountries', response.data);
          })
          .catch((error) => {
            alert('Country not found !');
          });
      }
    },
  },
});

export default store;
