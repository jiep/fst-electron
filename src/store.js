import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputImage: '',
    models: [
      {
        name: 'udnie',
        img: 'imgs/../udnie.png',
        folder: './models/udnie'
      }
      // ...
    ],
    selectedModels: [],
    results: []
  },
  getters: {
		getInputImage(state) {
			return state.inputImage
		},
    getModels(state) {
      return state.models
    },
    getSelectedModels(state) {
      return state.selectedModels
    },
    getResults(state) {
      return state.results
    }
	},
  mutations: {
    SELECT_IMAGE: (state, image) => {
      state.inputImage = image
      state.results = []
      state.selectedModels = []
    },
    SELECT_MODEL: (state, model) => {
      state.selectedModels.push(model)
    }
  },
  actions: {
    selectImage: (context, image) => {
      context.commit("SELECT_IMAGE", image)
    },
    selectModel: (context, model) => {
      context.commit("SELECT_MODEL", model)
    }
  }
})
