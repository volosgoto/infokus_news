import { GET_CATEGORY, GET_QUOTE } from './types';
import axios from 'axios';


export const getCategories = () => async dispatch => {
  const res = await axios.get('http://quotes.rest/qod/categories.json')

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