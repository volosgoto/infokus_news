import { GET_CATEGORY, GET_QUOTE } from './types';
import axios from 'axios';



fetch("https://api.paperquotes.com/apiv1/quotes/?tags=love&order=-likes", {
  headers: {
    Authorization: "Token {token_value}"
  }
})

export const getCategories = () => async dispatch => {
  const res = await fetch("https://api.paperquotes.com/apiv1/quotes/?tags=love&order=-likes", {
    headers: {
      Authorization: "Token {I-8PFLK631WGRY}"
    }
  })

    .then(res => {
      const categories = res.data;
      dispatch({
        type: GET_CATEGORY,
        // payload: res.data
        payload: categories
      });
    });


}

export const getQuote = () => async dispatch => {
  const res = await axios.get('');
  dispatch({
    type: GET_QUOTE,
    payload: res.data
  });
}