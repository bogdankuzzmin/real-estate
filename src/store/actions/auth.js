import axios from 'axios';

import {ActionType} from './actionTypes';

const API_KEY = 'AIzaSyAEQWMuv_LUQnhTuYqML4NOZlNi_9HczRk';
const SIGN_URL = {
  SIGN_IN: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  SIGN_UP: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
};

export const authStart = () => {
  return {
    type: ActionType.AUTH_START,
  };
};

export const authSuccess = (token, usedId) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    idToken: token,
    userId: usedId,
  };
};

export const authFail = (error) => {
  return {
    type: ActionType.AUTH_FAIL,
    error: error,
  };
};

export const auth = (data, isSignIn) => {
  console.log(isSignIn);

  return dispatch => {
    dispatch(authStart());
    let url = SIGN_URL.SIGN_UP + API_KEY;

    if (isSignIn) {
      url = SIGN_URL.SIGN_IN + API_KEY;
    }

    axios.post(url, data)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((error) => {
        console.log(error.response.data.error);
        dispatch(authFail(error.response.data.error.message));
      })
  };
};
