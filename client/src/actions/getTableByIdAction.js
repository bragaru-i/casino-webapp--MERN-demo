import { GET_TABLE_ERROR, GET_TABLE_STARTED, GET_TABLE_SUCCESS } from './types';
import axios from 'axios';
import urljoin from 'url-join';
let uri = '/api/v1/tables';

const getDataByIdAction = (id = '') => {
  return (dispatch) => {
    dispatch({ type: GET_TABLE_STARTED });
    axios
      .get(urljoin(uri, id))
      .then((res) => {
        dispatch({ type: GET_TABLE_SUCCESS, payload: res.data });
      })
      .catch((err) => dispatch({ type: GET_TABLE_ERROR, payload: err.message }));
  };
};

export default getDataByIdAction;
