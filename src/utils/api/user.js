import { axios } from "core";

export default {
  login: (postData) => axios.post('/user/signin', postData),
  registration: (postData) => axios.post('/user/signup', postData),
  verify: (hash) => axios.get(`/user/signup/verify?hash=${hash}`),
  getMe: () => axios.get("/user/getMe")
}
