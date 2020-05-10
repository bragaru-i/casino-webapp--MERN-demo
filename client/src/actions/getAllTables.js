import {
  GET_ALL_TABLES_ERROR,
  GET_ALL_TABLES_STARTED,
  GET_ALL_TABLES_SUCCESS,
} from './types';
import axios from 'axios';
import urljoin from 'url-join';
let uri = '/api/v1/tables';

const getAllTables = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_TABLES_STARTED });
    axios
      .get(urljoin(uri))
      .then((res) => {
        dispatch({ type: GET_ALL_TABLES_SUCCESS, payload: res.data.data });
      })
      .catch((err) => dispatch({ type: GET_ALL_TABLES_ERROR, payload: err.message }));
  };
};

export default getAllTables;
