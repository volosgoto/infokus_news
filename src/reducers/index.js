import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import quoteReducer from "./quoteReducer";

export default combineReducers({
  categories: categoriesReducer
  // quote: quoteReducer
});
