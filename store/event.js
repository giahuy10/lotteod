// const env = require('dotenv').config()
const mainURL = process.env.apiUrl

export const state = () => ({
  events: [],
  eventDetail: {},
  pagination: {}
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
    state.pagination = events.pagination
  },
  CHANGE_PAG(state, newpag) {
    state.pagination = newpag
  },
  SET_EVENT_DETAIL(state, event) {
    state.eventDetail = event.data
  }
}
export const actions = {
  async getEvents ({commit}, para) {
    const events = await this.$axios.$get(mainURL+'index.php?option=com_od_event&view=eventitems&Itemid=123&limitstart='+para.limitstart+'&format=raw&lang='+para.locale)
    commit('SET_EVENTS', events)
  },
  async getEventDetail ({commit}, para) {
    const event = await this.$axios.$get(mainURL+'api/index.php?act=event&lang='+para.locale+'&type=detail&slug='+para.slug)
    commit('SET_EVENT_DETAIL', event)
  },
  changePagination ({commit}, newPag) {
    commit('CHANGE_PAG', newPag)
  }
}