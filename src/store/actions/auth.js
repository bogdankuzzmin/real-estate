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

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationTime');
  localStorage.removeItem('userId');

  return {
    type: ActionType.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime *  1000);
  };
};

export const auth = (data, isSignIn) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    };

    let url = SIGN_URL.SIGN_UP + API_KEY;

    if (isSignIn) {
      url = SIGN_URL.SIGN_IN + API_KEY;
    }

    axios.post(url, authData)
      .then((response) => {
        const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationTime', expirationTime);
        localStorage.setItem('userId', response.data.localId);

        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error.message));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationTime'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId));
        dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())  / 1000));
      }
    }
  };
};
