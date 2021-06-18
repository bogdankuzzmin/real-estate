import axios from 'axios';

import {ActionType} from './actionTypes';

const API_KEY = 'AIzaSyAEQWMuv_LUQnhTuYqML4NOZlNi_9HczRk';
const SIGN_URL = {
  SIGN_IN: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  SIGN_UP: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
};

export const auth = (data, isSignIn) => {
  console.log(isSignIn);

  return dispatch => {
    let url = SIGN_URL.SIGN_UP + API_KEY;

    if (isSignIn) {
      url = SIGN_URL.SIGN_IN + API_KEY;
    }

    axios.post(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      })
  };
};
