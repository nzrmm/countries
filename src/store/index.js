import { createStore } from 'vuex';
import ApiServices from '@/services/ApiServices';

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
    detailFlag(state) {
      const { flags } = state.country;
      return flags;
    },
    detailBio(state) {
      const { name, borders } = state.country;
      return { name, borders };
    },
    detailDescLeft(state) {
      const { name, population, region, subregion, capital } = state.country;
      return {
        officialName: name.official,
        population: population,
        region: region,
        subregion: subregion,
        capital: capital ? capital : '-',
      };
    },
    detailDescRight(state) {
      const { tld, currencies, languages } = state.country;
      return {
        tlds: tld ? tld : '-',
        currencies: currencies,
        languages: languages,
      };
    },
  },
  mutations: {
    getCountries(state, data) {
      state.countries = data;
    },
    getRegion(state, data) {
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
    getCountries({ state, commit }) {
      state.isLoading = true;
      ApiServices.getCountries()
        .then((response) => {
          commit('getCountries', response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          state.isLoading = false;
        });
    },
    getRegion({ state, commit, dispatch }, region) {
      if (region === 'all') {
        dispatch('getCountries');
      } else {
        state.isLoading = true;
        ApiServices.getRegion(region)
          .then((response) => {
            commit('getRegion', response.data);
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
      ApiServices.getCountry(`name/${name}/?fullText=true`)
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
