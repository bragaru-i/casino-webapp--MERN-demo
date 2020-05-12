import { PATCH_TABLE_ERROR, PATCH_TABLE_SUCCESS } from './types';
import axios from 'axios';
import urljoin from 'url-join';
import loadTable from './getTableByIdAction';

const url = '/api/v1/tables/';
const patchTable = (obj, table) => (dispatch) => {
  const body = { ...obj };
  console.log(obj);
  axios
    .patch(urljoin(url, table), body)
    .then((res) => dispatch({ type: PATCH_TABLE_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: PATCH_TABLE_ERROR, payload: err.message }));
  dispatch(loadTable(table));
};

export default patchTable;
