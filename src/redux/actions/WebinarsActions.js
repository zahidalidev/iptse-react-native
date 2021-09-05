import {
  GET_ALL_WEBINARS_REQUEST,
  GET_ALL_WEBINARS_SUCCESS,
  GET_ALL_WEBINARS_ERROR,
  GET_WEBINAR_INFO_REQUEST,
  GET_WEBINAR_INFO_SUCCESS,
  GET_WEBINAR_INFO_ERROR,
} from '../../constants/ActionKeys';
import { WebinarService, WebinarsService } from '../../services/WebinarsService';

export const GetAllWebinarsRequestAsync = data => {
  return dispatch => {
    dispatch(GetAllWebinarsRequest());
    WebinarsService(dispatch, data);
  };
};

const GetAllWebinarsRequest = () => {
  return {
    type: GET_ALL_WEBINARS_REQUEST,
    payload: null,
  };
};

export const GetAllWebinarsSuccess = data => {
  return {
    type: GET_ALL_WEBINARS_SUCCESS,
    payload: data?.data,
  };
};

export const GetAllWebinarsError = data => {
  alert("error ", GET_ALL_WEBINARS_ERROR)
  return {
    type: GET_ALL_WEBINARS_ERROR,
    payload: data,
  };
};

// Get Single Webinar Info
export const GetWebinarInfoRequestAsync = data => {
  return dispatch => {
    dispatch(GetWebinarInfoRequest());
    WebinarService(dispatch, data);
  };
};

const GetWebinarInfoRequest = () => {
  return {
    type: GET_WEBINAR_INFO_REQUEST,
    payload: null,
  };
};

export const GetWebinarInfoSuccess = data => {
  return {
    type: GET_WEBINAR_INFO_SUCCESS,
    payload: data,
  };
};

export const GetWebinarInfoError = data => {
  return {
    type: GET_WEBINAR_INFO_ERROR,
    payload: data,
  };
};
