import {
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_COURSES_ERROR,
  GET_COURSE_INFO_REQUEST,
  GET_COURSE_INFO_SUCCESS,
  GET_COURSE_INFO_ERROR,
} from '../../constants/ActionKeys';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: null,
  course: null,
};

const CoursesReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_ALL_COURSES_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case GET_ALL_COURSES_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        data: payload,
      };
    case GET_ALL_COURSES_ERROR:
      return {
        ...state,
        isRequesting: false,
        isSuccess: false,
        isError: true,
        error: payload.error,
      };
    case GET_COURSE_INFO_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case GET_COURSE_INFO_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        course: payload,
      };
    case GET_COURSE_INFO_ERROR:
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

export default CoursesReducer;
