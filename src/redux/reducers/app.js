const initialState = {
  isLoading: true
};

const SET_IS_LOADING = 'APP:SET_IS_LOADING';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export const setIsLoading = (bool) => ({
  type: SET_IS_LOADING,
  payload: bool
});
