
const Reducer = (state, action) => {
  switch (action.type) {
    case 'userData':
      return {
        ...state,
        userData: action.payload,
      };

    default:
      break;
  }
};

export default Reducer;
