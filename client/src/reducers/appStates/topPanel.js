const initialState = {
  view: 'info',
};

const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOP_FULL':
      return { ...state, view: 'player' };

    default:
      return state;
  }
};
export default viewReducer;
