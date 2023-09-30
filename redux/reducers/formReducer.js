const initialState = {
  purpose: null,
  animal: null,
  location: null,
  date: (new Date()).toISOString().split('T')[0],
};
 
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    case 'SET_DATE':
      return {
        ...state,
        date: action.payload,
      };
    case 'SET_PURPOSE':
      return {
        ...state,
        purpose: action.payload,
      };
    case 'SET_ANIMAL':
      return {
        ...state,
        animal: action.payload,
      };
    default:
      return state;
  }
};