import axios from 'axios'
const mainURL = 'http://lotteodapi.com/api/?'
const getDetailContent = function (route) {
  return axios.get(mainURL+'act=event&lang='+route.params.lang+'&type=detail&slug='+route.params.slug)
    .then((res) => {
      return { data: res.data.data }
    })
    .catch((err) => {
      return {
        err: err
      }
    })
}
export const state = () => ({
  locales: [
    {
      code: 'en',
      name: 'English',
      dir: 'ltr'
    },
    {
      code: 'vi',
      name: 'Vietnamese',
      dir: 'ltr'
    },
    {
      code: 'kr',
      name: 'Korean',
      dir: 'ltr'
    }
  ],
  locale: 'vi',
  mainURL: 'http://lotteodapi.com/api/?',
  eventDetail: {}
})
export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.find(item => item.code === locale)) {
      state.locale = locale
    }
  },
  SET_EVENT_DETAIL(state, data) {
    state.eventDetail = data
  }
}
export const actions = {
  setLang ({commit}, payload) {
    commit('SET_LANG', payload)
  },
  async nuxtServerInit ({ commit, state }, { route }) {
    if (route.params && route.params.slug) {
      let detail = await getDetailContent(route)
      commit('SET_EVENT_DETAIL', detail.data)
    }
  },
  async changeLang ({commit, state}, route) {
    let detail = await getDetailContent(route)
      commit('SET_EVENT_DETAIL', detail.data)
  }
}