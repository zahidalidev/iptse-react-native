import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SET_SIGNIN,
} from '../../constants/ActionKeys';
import { LoginService } from '../../services/SignInService';

export const SignInRequestAsync = data => {
  return dispatch => {
    dispatch(SignInRequest());
    LoginService(dispatch, data);
  };
};

const SignInRequest = () => {
  return {
    type: SIGNIN_REQUEST,
    payload: null,
  };
};

export const SignInSuccess = data => {
  return {
    type: SIGNIN_SUCCESS,
    payload: data,
  };
};

export const SignInError = data => {
  alert(SignInError)
  return {
    type: SIGNIN_ERROR,
    payload: data,
  };
};

export const SetLoggedIn = data => {
  return {
    type: SET_SIGNIN,
    payload: data,
  };
};
