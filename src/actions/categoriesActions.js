import { GET_CATEGORIES } from "./types";
import axios from "axios";

// let URL = "https://theysaidso.p.rapidapi.com/categories.json?start=0";
let URL = "https://jsonplaceholder.typicode.com/users";

export const getCategories = () => async dispatch => {
  return await axios
    .get(URL, {
      header: {
        // "X-RapidAPI-Key": "12674d6409msh29e09cf2c5c866ep1568d6jsnfab1189491e3"
        "X-RapidAPI-Key": "12674d6409msh29e09cf2c5c866ep1568d6jsnfab1189491e3"
      }
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      });
    });
};
