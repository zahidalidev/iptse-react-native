import {
  VERIFY_MOBILE_REQUEST,
  VERIFY_MOBILE_SUCCESS,
  VERIFY_MOBILE_ERROR,
} from '../../constants/ActionKeys';
import {VerifyMobileService} from '../../services/VerifyMobileService';

export const VerifyMobileRequestAsync = data => {
  return dispatch => {
    dispatch(VerifyMobileRequest());
    VerifyMobileService(dispatch, data);
  };
};

const VerifyMobileRequest = () => {
  return {
    type: VERIFY_MOBILE_REQUEST,
    payload: null,
  };
};

export const VerifyMobileSuccess = data => {
  return {
    type: VERIFY_MOBILE_SUCCESS,
    payload: data,
  };
};

export const VerifyMobileError = data => {
  return {
    type: VERIFY_MOBILE_ERROR,
    payload: data,
  };
};
