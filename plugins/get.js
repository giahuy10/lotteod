import Vue from 'vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
 
Vue.use(axios)
const mainURL = 'http://lotteodapi.com/api/?';
export const getItem = (locale, cat) => {
  // return 0
  return axios.get(`/api/${locale}/${cat}.json`)
    .then((res) => {
      return { data: res.data }
    })
    .catch((err) => {
      return {
        err: err
      }
    })
}

export const getList = (locale, cat) => {
  return axios.get(mainURL+'act='+cat+'&lang='+locale)
    .then((res) => {
      return { data: res.data.data }
    })
    .catch((err) => {
      return {
        err: err
      }
    })
}
export const getDetail = (locale, cat, slug) => {
  return axios.get(mainURL+'act='+cat+'&lang='+locale+'&type=detail&slug='+slug)
    .then((res) => {
      return { data: res.data.data }
    })
    .catch((err) => {
      return {
        err: err
      }
    })
}
export const subscribeEmail = (email, name) => {
  return axios.get(mainURL+'act=subscriber&name='+name+'&email='+email)
    .then((res) => {
      return { data: res.data }
    })
    .catch((err) => {
      return {
        err: err
      }
    })
}