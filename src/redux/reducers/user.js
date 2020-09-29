import { userApi } from "utils/api";
import { openNotification } from "utils/helpers";
import { axios } from "core";
import { setIsLoading as setIsLoadingApp } from "./app";

const SET_USER_DATA = 'USER:SET_USER_DATA';
const SET_IS_AUTH = 'USER:SET_IS_AUTH';
const SET_TOKEN = 'USER:SET_TOKEN';

const initialState = {
  user: null,
  token: window.localStorage.token,
  isAuth: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: payload,
        isAuth: true
      };
    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: payload
      };
    case SET_TOKEN:
      return {
        ...state,
        token: payload
      };
    default:
      return state
  }
};

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  payload: data
});

export const setIsAuth = (bool) => ({
  type: SET_IS_AUTH,
  payload: bool
});

export const setToken = (payload) => ({
  type: SET_TOKEN,
  payload
});

export const fetchUserData = () => (dispatch, getState) => {
  if (getState().user.token && !axios.defaults.headers.common.token) {
    axios.defaults.headers.common['token'] = window.localStorage.getItem('token');
  }

  userApi
    .getMe()
    .then(({ data }) => {
      dispatch(setUserData(data));
      dispatch(setIsLoadingApp(false));
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch(setIsAuth(false));
        dispatch(setIsLoadingApp(false));
        dispatch(setToken(null));
        delete window.localStorage.token;
      }
    });
};

export const fetchLogin = (postData) => dispatch => {
  return userApi.login(postData)
    .then(({ data }) => {
      const { token, status, ...userData } = data;
      openNotification({
        title: 'Отлично!',
        text: 'Авторизация успешна.',
        type: 'success',
      });
      axios.defaults.headers.common['token'] = token;
      window.localStorage['token'] = token;
      dispatch(setUserData(userData));
      return data;
    })
    .catch(({ response: { data } }) => {
      openNotification({
        title: 'Ошибка при авторизации',
        text: 'Неверный логин или пароль',
        type: 'error',
      });
      return data;
    })
};

export const fetchRegistration = (postData) => {
  return userApi.registration(postData)
    .then((data) => {
      console.log(data)
    })
    .catch(e => {
      console.log(e);
    });
};
