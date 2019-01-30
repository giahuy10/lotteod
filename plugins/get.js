import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// const env = require('dotenv').config()
Vue.use(axios)
const mainURL = 'http://lotteodapi.com/'

export const subscribeEmail = (email, name) => {
  return axios.get(mainURL+'act=subscriber&name='+name+'&email='+email)
}
