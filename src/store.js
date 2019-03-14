/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalSlides: 0,
    prevSlide: 0,
    currentSlide: 1,
    nextSlide: 2,
  },
  getters: {
    getTotalSlides: state => state.totalSlides,
    getPrevSlide: state => state.prevSlide,
    getCurrentSlide: state => state.currentSlide,
    getNextSlide: state => state.nextSlide,
  },
  mutations: {
    setTotalSlides: (state, payload) => {
      state.totalSlides = payload;
    },
    setPrevSlide: (state, payload) => {
      state.prevSlide = payload;
    },
    setCurrentSlide: (state, payload) => {
      state.currentSlide = payload;
    },
    setNextSlide: (state, payload) => {
      state.nextSlide = payload;
    },
  },
  actions: {
    setTotalSlides: ({ commit }, payload) => {
      commit('setTotalSlides', payload);
    },
    setPrevSlide: ({ commit }, payload) => {
      commit('setPrevSlide', payload);
    },
    setCurrentSlide: ({ commit }, payload) => {
      commit('setCurrentSlide', payload);
    },
    setNextSlide: ({ commit }, payload) => {
      commit('setNextSlide', payload);
    },
  },
});
