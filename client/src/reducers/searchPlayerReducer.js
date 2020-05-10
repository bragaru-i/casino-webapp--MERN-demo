import {
  GET_SEARCH_PLAYER_ERROR,
  GET_SEARCH_PLAYER_SUCCESS,
  GET_SEARCH_PLAYER_STARTED,
} from '../actions/types';
let initialState = {
  loading: 'loading',
  error: null,
  data: [],
};

const searchPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_PLAYER_SUCCESS:
      return {
        ...state,
        loading: 'loaded',
        error: null,
        ...action.payload,
      };

    case GET_SEARCH_PLAYER_ERROR:
      return {
        ...state,
        loading: 'error',
        error: action.payload,
      };
    case GET_SEARCH_PLAYER_STARTED:
      return {
        ...state,
        loading: 'loading',
      };

    default:
      return state;
  }
};

export default searchPlayerReducer;
