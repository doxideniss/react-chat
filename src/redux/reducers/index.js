import { combineReducers } from 'redux'
import auth from './auth';
import dialogs from './dialogs';
import messages from './messages';

export default combineReducers({
  auth,
  dialogs,
  messages
})
