import {
  SET_SIGNIN,
  SIGNIN_ERROR,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from '../../constants/ActionKeys';
import {storeToken} from '../../utils/util';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: null,
  isLoggedIn: false,
};

const SignInReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        data: payload,
        isLoggedIn: true,
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        isRequesting: false,
        isSuccess: false,
        isError: true,
        error: payload.error,
      };
    case SET_SIGNIN:
      return {
        ...state,
        isLoggedIn: payload.data.isLoggedIn,
      };
    default:
      return state;
  }
};

export default SignInReducer;
