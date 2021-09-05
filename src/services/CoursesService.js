import {
  GetAllCoursesSuccess,
  GetAllCoursesError,
  GetCourseSuccess,
  GetCourseError,
} from '../redux/actions/CoursesActions';
import ApiClient from '../api/ApiClient';
import API_ENDPOINTS from '../constants/ApiEndpoints';

export const CoursesService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.GET,
      API_ENDPOINTS.COURSES,
      null,
      null,
      null,
      true,
      null,
    );
    dispatch(GetAllCoursesSuccess(result));
  } catch (error) {
    dispatch(GetAllCoursesError(error.message));
  }
};

export const CourseService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.GET,
      API_ENDPOINTS.COURSE.replace('{courseId}', data?.courseId),
      null,
      null,
      null,
      true,
      null,
    );
    dispatch(GetCourseSuccess(result));
  } catch (error) {
    dispatch(GetCourseError(error.message));
  }
};
