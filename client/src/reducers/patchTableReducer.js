import { PATCH_TABLE_ERROR, PATCH_TABLE_SUCCESS } from '../actions/types';

const initialState = {
  finished: false,
  data: {},
  error: null,
};
//

const patchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PATCH_TABLE_SUCCESS:
      return { ...state, data: payload, finished: true };
    case PATCH_TABLE_ERROR:
      return { ...state, data: '', error: payload, finished: true };
    default:
      return state;
  }
};
export default patchReducer;
