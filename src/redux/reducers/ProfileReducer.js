import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
} from '../../constants/ActionKeys';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: null,
};

const ProfileReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        data: payload,
      };
    case GET_USER_PROFILE_ERROR:
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

export default ProfileReducer;
