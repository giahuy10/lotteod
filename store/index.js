const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  auth: null,
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
  screenWidth: 'xl' // xs- 300 -> 399 |  sm - 400 -> 767 | md - 768 -> 1023 | lg : 1024 -> 1366 | xl: > 1366
})
export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.find(item => item.code === locale)) {
      state.locale = locale
    }
  },
  SET_DEVICE(state, device) {
    state.screenWidth = device
  },
  SET_AUTH(state, auth) {
    state.auth = auth
  }
}
export const actions = {
  setLang ({commit}, payload) {
    commit('SET_LANG', payload)
  },
  setDevice ({commit}, val) {
    commit('SET_DEVICE', val)
  },
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('SET_AUTH', auth)
  }
}