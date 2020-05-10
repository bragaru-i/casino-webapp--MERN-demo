import {
  GET_ALL_TABLES_ERROR,
  GET_ALL_TABLES_SUCCESS,
  GET_ALL_TABLES_STARTED,
} from '../actions/types';
let initialState = {
  loading: 'loading',
  error: null,
  data: [],
};

const getAllTablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TABLES_SUCCESS:
      return {
        ...state,
        loading: 'loaded',
        error: null,
        data: [...action.payload],
      };

    case GET_ALL_TABLES_ERROR:
      return {
        ...state,
        loading: 'error',
        error: action.payload,
      };
    case GET_ALL_TABLES_STARTED:
      return {
        ...state,
        loading: 'loading',
      };

    default:
      return state;
  }
};

export default getAllTablesReducer;
