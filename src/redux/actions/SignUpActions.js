import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../../constants/ActionKeys';
import {SignUpService} from '../../services/SignUpService';

export const SignUpRequestAsync = data => {
  return dispatch => {
    dispatch(SignUpRequest());
    SignUpService(dispatch, data);
  };
};

const SignUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
    payload: null,
  };
};

export const SignUpSuccess = data => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
};

export const SignUpError = data => {
  return {
    type: SIGNUP_ERROR,
    payload: data,
  };
};
