import {
  GET_ALL_COURSES_REQUEST,
  GET_ALL_COURSES_SUCCESS,
  GET_ALL_COURSES_ERROR,
  GET_COURSE_INFO_REQUEST,
  GET_COURSE_INFO_SUCCESS,
  GET_COURSE_INFO_ERROR,
} from '../../constants/ActionKeys';
import { CourseService, CoursesService } from '../../services/CoursesService';

export const GetAllCoursesRequestAsync = data => {
  return dispatch => {
    dispatch(GetAllCoursesRequest());
    CoursesService(dispatch, data);
  };
};

const GetAllCoursesRequest = () => {
  return {
    type: GET_ALL_COURSES_REQUEST,
    payload: null,
  };
};

export const GetAllCoursesSuccess = data => {
  return {
    type: GET_ALL_COURSES_SUCCESS,
    payload: data?.data,
  };
};

export const GetAllCoursesError = data => {
  alert("error ", GET_ALL_COURSES_ERROR)
  return {
    type: GET_ALL_COURSES_ERROR,
    payload: data,
  };
};

// Get Sigle Course Info
export const GetCourseRequestAsync = data => {
  return dispatch => {
    dispatch(GetCourseRequest());
    CourseService(dispatch, data);
  };
};

const GetCourseRequest = () => {
  return {
    type: GET_COURSE_INFO_REQUEST,
    payload: null,
  };
};

export const GetCourseSuccess = data => {
  return {
    type: GET_COURSE_INFO_SUCCESS,
    payload: data,
  };
};

export const GetCourseError = data => {
  return {
    type: GET_COURSE_INFO_ERROR,
    payload: data,
  };
};
