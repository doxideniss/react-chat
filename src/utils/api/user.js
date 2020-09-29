import { axios } from "core";

export default {
  login: (postData) => axios.post('/user/signin', postData),
  registration: (postData) => axios.post('/user/signup', postData),
  getMe: () => axios.get("/user/getMe")
}
