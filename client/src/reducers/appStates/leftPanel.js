const initialState = {
  view: 'info',
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LEFT_TABLE':
      return { ...state, view: 'table' };
    case 'LEFT_TABLES':
      return { ...state, view: 'tables' };
    // case 'LEFT_SEARCH':
    //   return { ...state, view: 'search' };
    // case 'LEFT_REFRESH':
    //   return { ...state, view: 'refresh' };

    default:
      return state;
  }
};
export default viewReducer;
