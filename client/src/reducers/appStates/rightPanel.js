const initialState = {
  view: 'info',
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RIGHT_PLAYER':
      return { ...state, view: 'player' };
    case 'RIGHT_SEARCH':
      return { ...state, view: 'search' };

    default:
      return state;
  }
};
export default viewReducer;
