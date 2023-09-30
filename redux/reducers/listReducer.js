const initialState = {
  doctors: [],
  filtered_doctors: [],
};
 
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIST':
      return {
        ...state,
        doctors: action.payload,
      };
    case 'SET_FILTERED_LIST':
      return {
        ...state,
        filtered_doctors: action.payload,
      };
    default:
      return state;
  }
};