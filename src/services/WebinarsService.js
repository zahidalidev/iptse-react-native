import {
  GetAllWebinarsSuccess,
  GetAllWebinarsError,
  GetWebinarInfoSuccess,
  GetWebinarInfoError,
} from '../redux/actions/WebinarsActions';
import ApiClient from '../api/ApiClient';
import API_ENDPOINTS from '../constants/ApiEndpoints';

export const WebinarsService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.GET,
      API_ENDPOINTS.WEBINARS,
      null,
      null,
      null,
      true,
      null,
    );
    dispatch(GetAllWebinarsSuccess(result));
  } catch (error) {
    dispatch(GetAllWebinarsError(error.message));
  }
};

export const WebinarService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.GET,
      API_ENDPOINTS.WEBINAR.replace('{webinarId}', data?.webinarId),
      null,
      null,
      null,
      true,
      null,
    );
    dispatch(GetWebinarInfoSuccess(result));
  } catch (error) {
    dispatch(GetWebinarInfoError(error.message));
  }
};
