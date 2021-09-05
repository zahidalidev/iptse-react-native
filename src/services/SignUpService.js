import {SignUpSuccess, SignUpError} from '../redux/actions/SignUpActions';
import ApiClient from '../api/ApiClient';
import API_ENDPOINTS from '../constants/ApiEndpoints';

export const SignUpService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.REGISTER,
      data,
      null,
      null,
      false,
      null,
    );
    dispatch(SignUpSuccess(result));
  } catch (error) {
    dispatch(SignUpError(error.message));
  }
};
