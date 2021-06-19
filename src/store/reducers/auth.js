import {updateObject} from '../../utils/common';
import {ActionType} from '../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  loading: false,
  error: null,
};

const auth = (state = initialState, action) => {
  const authStart = (state) => {
    return updateObject(state, {error: null, loading: true});
  };

  const authSuccess = (state, action) => {
    return updateObject(state, {
      token: action.idToken,
      userId: action.userId,
      loading: false,
      error: null,
    });
  };

  const authFail = (state, action) => {
    return updateObject(state, {
      loading: false,
      error: action.error,
    });
  };

  switch (action.type) {
    case ActionType.AUTH_START: return authStart(state);
    case ActionType.AUTH_SUCCESS: return authSuccess(state, action);
    case ActionType.AUTH_FAIL: return authFail(state, action);

    default: return state;
  }
};


export default auth;
