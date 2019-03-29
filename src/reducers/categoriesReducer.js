import { GET_CATEGORIES } from "../actions/types";

let initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload;

    default:
      return state;
  }
}
