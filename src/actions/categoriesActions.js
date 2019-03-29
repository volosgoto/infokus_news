import { GET_CATEGORIES } from "./types";
import axios from "axios";

let API_KEY = "a91b290f83c64825bb4378ca84914ac8";
let URL = `https://newsapi.org/v2/top-headlines?country=ua&apiKey=${API_KEY}`;
// let URL = "https://jsonplaceholder.typicode.com/users";

export const getCategories = () => async dispatch => {
  return await axios
    .get(URL)
    .then(res => {
      // console.log("res data", res.data);
      let categories = res.data.articles;
      dispatch({
        type: GET_CATEGORIES,
        payload: categories
      });
    })
    .catch(error => console.log("error", error));
};
