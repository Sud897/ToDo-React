import { ADD_LISTS, DELETE_LISTS, FETCH_LISTS } from "./Type";

export const addList = (payload) => {
  return {
    type: ADD_LISTS,
    payload: payload,
  };
};
export const deleteList = (payload) => {
  return {
    type: DELETE_LISTS,
    payload: payload,
  };
};
export const fetchList = (payload) => {
  return {
    type: FETCH_LISTS,
    payload: payload,
  };
};
