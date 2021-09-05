import {
  VERIFY_MOBILE_REQUEST,
  VERIFY_MOBILE_SUCCESS,
  VERIFY_MOBILE_ERROR,
} from '../../constants/ActionKeys';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: null,
  isMobileVerified: false,
};

const VerifyMobileReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case VERIFY_MOBILE_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case VERIFY_MOBILE_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        data: payload,
        isMobileVerified: true,
      };
    case VERIFY_MOBILE_ERROR:
      return {
        ...state,
        isRequesting: false,
        isSuccess: false,
        isError: true,
        error: payload.error,
        isMobileVerified: false,
      };
    default:
      return state;
  }
};

export default VerifyMobileReducer;
