// const env = require('dotenv').config()
const mainURL = process.env.apiUrl

export const state = () => ({
  galleries: [],
  pagination: {}
})
export const mutations = {
  SET_GALLERIES(state, galleries) {
    state.galleries = galleries
    state.pagination = galleries.pagination
  },
  CHANGE_PAG(state, newpag) {
    state.pagination = newpag
  },
}
export const actions = {
  async getGalleries ({commit}, limitstart) {
    const galleries = await this.$axios.$get(mainURL+'index.php?option=com_od_photo&view=photoimages&Itemid=126&format=raw&limitstart='+limitstart+'&format=raw')
    commit('SET_GALLERIES', galleries)
  },
  changePagination ({commit}, newPag) {
    commit('CHANGE_PAG', newPag)
  }
}