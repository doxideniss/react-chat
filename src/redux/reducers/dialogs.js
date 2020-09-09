import { dialogsApi } from "utils/api";

const initialState = {
  items: [],
  currentDialogId: null
};

const SET_ITEMS = 'DIALOGS:SET_ITEMS';
const SET_CURRENT_DIALOG = 'DIALOGS:SET_CURRENT_DIALOG';
const SET_IS_LOADING = 'DIALOGS:SET_IS_LOADING';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialogId: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export const setItems = (items) => ({
  type: SET_ITEMS,
  payload: items
});

export const setIsLoading = (bool) => ({
  type: SET_IS_LOADING,
  payload: bool
});

export const setCurrentDialog = (id) => ({
  type: SET_CURRENT_DIALOG,
  payload: id
});

export const fetchDialogs = () => async (dispatch) => {
  dispatch(setIsLoading(true));
  await dialogsApi.getAll()
    .then(({ data }) => dispatch(setItems(data)))
    .catch(() => {
      dispatch(setIsLoading(false));
    });
};
