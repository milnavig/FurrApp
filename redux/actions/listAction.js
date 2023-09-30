export const fill = (payload) => {
  return {
    type: 'SET_LIST',
    payload,
  };
};

export const fillFiltered = (payload) => {
  return {
    type: 'SET_FILTERED_LIST',
    payload,
  };
};