import { dialogs } from "utils/api";

const initialState = {
  items: [],
  currentDialog: null
};

const SET_ITEMS = 'DIALOGS:SET_ITEMS';
const SET_CURRENT_DIALOG = 'DIALOGS:SET_CURRENT_DIALOG';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.payload,
      };
    default:
      return state;
  }
};

export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: items
});

export const setCurrentDialog = (id) => ({
  type: SET_CURRENT_DIALOG,
  payload: id
});

export const fetchDialogs = () => async (dispatch) => {
  await dialogs.getAll().then(({ data }) => dispatch(setItems(data)))
};
