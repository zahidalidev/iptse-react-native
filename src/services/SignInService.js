import {SignInSuccess, SignInError} from '../redux/actions/SignInActions';
import ApiClient from '../api/ApiClient';
import API_ENDPOINTS from '../constants/ApiEndpoints';

export const LoginService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.POST,
      API_ENDPOINTS.LOGIN,
      data,
      null,
      null,
      false,
      null,
    );
    dispatch(SignInSuccess(result));
  } catch (error) {
    dispatch(SignInError(error.message));
  }
};
