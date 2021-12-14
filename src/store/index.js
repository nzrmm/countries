import { createStore } from 'vuex';
import axios from 'axios';
import { allCountries } from '@/constant/api';

const store = createStore({
  state: {
    countries: [],
  },
  mutations: {
    getAllCountries(state, data) {
      state.countries = data;
    },
  },
  actions: {
    getAllCountries({ commit }) {
      axios
        .get(allCountries)
        .then((response) => {
          console.log(response.data);
          commit('getAllCountries', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
