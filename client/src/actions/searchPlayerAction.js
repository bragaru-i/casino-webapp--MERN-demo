import {
  GET_SEARCH_PLAYER_ERROR,
  GET_SEARCH_PLAYER_STARTED,
  GET_SEARCH_PLAYER_SUCCESS,
} from './types';
import urljoin from 'url-join';
import axios from 'axios';

let uri = 'http://localhost:8000/api/v1/players';

const searchPlayer = (search) => {
  return (dispatch) => {
    dispatch({ type: GET_SEARCH_PLAYER_STARTED });
    let buildQuery = '?';
    Object.keys(search).forEach((item) => {
      buildQuery += `${item}=${search[item]}&`;
    });
    axios
      .get(urljoin(uri, buildQuery))
      .then((res) => {
        dispatch({ type: GET_SEARCH_PLAYER_SUCCESS, payload: res.data });
      })
      .catch((err) => dispatch({ type: GET_SEARCH_PLAYER_ERROR, payload: err.message }));
  };
};

export default searchPlayer;
