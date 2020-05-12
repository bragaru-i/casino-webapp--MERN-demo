import { GET_TABLE_ERROR, GET_TABLE_SUCCESS, GET_TABLE_STARTED } from '../actions/types';
let initialState = {
  loading: 'loading',
  error: null,
  data: [],
};

const getTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TABLE_SUCCESS:
      return {
        ...state,
        loading: 'loaded',
        error: null,
        data: { ...action.payload },
      };

    case GET_TABLE_ERROR:
      return {
        ...state,
        loading: 'error',
        error: action.payload,
      };
    case GET_TABLE_STARTED:
      return {
        ...state,
        loading: 'loading',
      };

    default:
      return state;
  }
};

export default getTableReducer;
