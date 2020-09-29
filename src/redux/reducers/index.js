import { combineReducers } from 'redux';

const reducers = ['user', 'dialogs', 'messages', 'app'];

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {})
);
