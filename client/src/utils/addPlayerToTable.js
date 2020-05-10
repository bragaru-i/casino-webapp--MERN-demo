import axios from 'axios';
import urljoin from 'url-join';
import store from '../store';

let uri = 'http://localhost:8000/api/v1/tables';

export default (table, playerId) => {
  axios
    .patch(urljoin(uri, table), { players: { player: playerId } })
    .then((res) => alert('Added to table'))
    .catch((err) => alert('Something went wrong'));
  store.dispatch({ type: 'GET_ALL_TABLES_STARTED' });
  store.dispatch({ type: 'TABLES' });
  store.dispatch({ type: 'PLAYERS' });
};
