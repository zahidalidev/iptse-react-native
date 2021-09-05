import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
} from '../../constants/ActionKeys';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: null,
};

const ForgotPasswordReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        data: payload,
      };
    case FORGOT_PASSWORD_ERROR:
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

export default ForgotPasswordReducer;
