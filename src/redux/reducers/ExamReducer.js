import {
  GET_EXAMS_REQUEST,
  GET_EXAMS_SUCCESS,
  GET_EXAMS_ERROR,
} from '../../constants/ActionKeys';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: null,
};

const ExamReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_EXAMS_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case GET_EXAMS_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        data: payload,
      };
    case GET_EXAMS_ERROR:
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

export default ExamReducer;
