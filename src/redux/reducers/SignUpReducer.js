import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../../constants/ActionKeys';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: null,
};

const SignUpReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        data: payload,
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        isRequesting: false,
        isSuccess: false,
        isError: true,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default SignUpReducer;
