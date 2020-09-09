import { messagesApi } from "../../utils/api";

const initialState = {
  items: [],
  isLoading: false
};

const SET_MESSAGES = 'MESSAGES:SET_ITEMS';
const SET_IS_LOADING = 'MESSAGES:SET_IS_LOADING';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state
  }
};

export const setMessages = (items) => ({
  type: SET_MESSAGES,
  payload: items
});

export const setIsLoading = (bool) => ({
  type: SET_IS_LOADING,
  payload: bool
});

export const fetchMessages = (id) => async (dispatch) => {
  dispatch(setIsLoading(true));
  await messagesApi.getAllByDialogId(id).then(({data}) => {
    dispatch(setMessages(data))
  }).catch(() => {
    dispatch(setIsLoading(false));
  });
};
