// const env = require('dotenv').config()
const mainURL = process.env.apiUrl

export const state = () => ({
  events: [],
  eventDetail: {},
  pagination: {}
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events.items
    state.pagination = events.pagination
  },
  CHANGE_PAG(state, newpag) {
    state.pagination = newpag
  },
  SET_EVENT_DETAIL(state, event) {
    state.eventDetail = event.item
  }
}
export const actions = {
  async getEvents ({commit}, para) {
    const events = await this.$axios.$get('https://lotteskywalk.tk/api/events')
    commit('SET_EVENTS', events)
  },
  async getEventDetail ({commit}, para) {
    const event = await this.$axios.$get('https://lotteskywalk.tk/api/events/'+para.slug)
    commit('SET_EVENT_DETAIL', event)
  },
  changePagination ({commit}, newPag) {
    commit('CHANGE_PAG', newPag)
  }
}