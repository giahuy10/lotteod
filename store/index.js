import axios from 'axios'
// const env = require('dotenv').config()
const mainURL = process.env.apiUrl

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
})
export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.find(item => item.code === locale)) {
      state.locale = locale
    }
  }
}
export const actions = {
  setLang ({commit}, payload) {
    commit('SET_LANG', payload)
  }
}