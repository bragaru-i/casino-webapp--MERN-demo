import { PATCH_TRANSACTION_ERROR, PATCH_TRANSACTION_SUCCESS } from '../actions/types';

const initialState = {
  finished: false,
  data: {},
  error: null,
};
//

const patchTransactionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PATCH_TRANSACTION_SUCCESS:
      return { ...state, data: payload, finished: true };
    case PATCH_TRANSACTION_ERROR:
      return { ...state, data: '', error: payload, finished: true };
    default:
      return state;
  }
};
export default patchTransactionReducer;
