import { GET_CATEGORY, GET_QUOTE } from './types';
import axios from 'axios';


export const getCategory = () => async dispatch => {
  const res = await axios.get('');
  dispatch({
    type: GET_CATEGORY,
    payload: res.data
  });
}

export const getQuote = () => async dispatch => {
  const res = await axios.get('');
  dispatch({
    type: GET_QUOTE,
    payload: res.data
  });
}