// import { GET_CATEGORY, GET_QUOTE } from "./types";
// import axios from "axios";

// let URL = "https://jsonplaceholder.typicode.com/todos/1";
// // URL = "https://api.paperquotes.com/apiv1/quotes/";
// const token = "4ec061fa8bd74be205c4a98f5f3e7a14fe58a88c";

// // export const getCategories = () => async dispatch => {
// //   await fetch(URL, {
// //     method: "GET",
// //     mode: "no-cors",
// //     headers: {
// //       Authorization: `token ${token}`
// //     }
// //   }).then(res => {
// //     const categories = res.data;
// //     dispatch({
// //       type: GET_CATEGORY,
// //       payload: categories
// //     });
// //   });
// // };

// export const getCategories = () => async dispatch => {
//   fetch(URL, {
//     headers: {
//       Authorization: `token ${token}`
//     }
//   })
//     .then(response => response.json())
//     .then(json => console.log(json));
// };

// export const getQuote = () => async dispatch => {
//   const res = await axios.get("");
//   dispatch({
//     type: GET_QUOTE,
//     payload: res.data
//   });
// };
