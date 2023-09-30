import { SET_PURPOSE, SET_ANIMAL, SET_LOCATION, SET_DATE } from './../actionTypes';

export const setPurpose = (payload) => {
  return {
    type: SET_PURPOSE,
    payload,
  };
};

export const setAnimal = (payload) => {
  return {
    type: SET_ANIMAL,
    payload,
  };
};

export const setLocation = (payload) => {
  return {
    type: SET_LOCATION,
    payload,
  };
};

export const setDate = (payload) => {
  return {
    type: SET_DATE,
    payload,
  };
};