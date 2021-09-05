import {
  GET_ALL_WEBINARS_REQUEST,
  GET_ALL_WEBINARS_SUCCESS,
  GET_ALL_WEBINARS_ERROR,
  GET_WEBINAR_INFO_REQUEST,
  GET_WEBINAR_INFO_SUCCESS,
  GET_WEBINAR_INFO_ERROR,
} from '../../constants/ActionKeys';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: null,
  webinar: null,
};

const WebinarReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_ALL_WEBINARS_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case GET_ALL_WEBINARS_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        data: payload,
      };
    case GET_ALL_WEBINARS_ERROR:
      return {
        ...state,
        isRequesting: false,
        isSuccess: false,
        isError: true,
        error: payload.error,
      };
    case GET_WEBINAR_INFO_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case GET_WEBINAR_INFO_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        webinar: payload,
      };
    case GET_WEBINAR_INFO_ERROR:
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

export default WebinarReducer;
