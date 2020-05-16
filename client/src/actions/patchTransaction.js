import { PATCH_TRANSACTION_ERROR, PATCH_TRANSACTION_SUCCESS } from './types';
import axios from 'axios';
import loadTable from './getTableByIdAction';

const patchTransactions = (id, obj, tableId) => (dispatch) => {
  const body = { ...obj };
  console.log(body);
  const url = `/api/v1/transactions/${id}`;
  console.log(obj);
  console.log(url);

  axios
    .patch(url, body)
    .then((res) => dispatch({ type: PATCH_TRANSACTION_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: PATCH_TRANSACTION_ERROR, payload: err }));
  dispatch(loadTable(tableId));
};

export default patchTransactions;
