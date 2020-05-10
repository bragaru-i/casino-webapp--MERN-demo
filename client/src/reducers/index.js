import { combineReducers } from 'redux';
import getTableById from './getTableReducer';
import searchPlayer from './searchPlayerReducer';
import viewReducer from './appStates/leftPanel';
import getAllTablesReducer from './getAllTablesReducer';
import rightPanel from './appStates/rightPanel';
import topPanel from './appStates/topPanel';

const rootReducer = combineReducers({
  leftPanel: viewReducer,
  topPanel: topPanel,
  rightPanel: rightPanel,
  table: getTableById,
  searchPlayer: searchPlayer,
  allTables: getAllTablesReducer,
});

export default rootReducer;
