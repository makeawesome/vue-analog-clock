import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hours: '',
    minutes: '',
    seconds: '',
  },
  actions: {
    UPDATE_TIME({commit}, day = new Date()) {
      commit('UPDATE_TIME', {
        hours: day.getHours(),
        minutes: day.getMinutes(),
        seconds: day.getSeconds(),
      });
    },
  },
  mutations: {
    UPDATE_TIME(state, {hours, minutes, seconds}) {
      state.hours = hours;
      state.minutes = minutes;
      state.seconds = seconds;
    }
  }
});

export default store;