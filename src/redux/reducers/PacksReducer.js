import {
  GET_PACKS_REQUEST,
  GET_PACKS_SUCCESS,
  GET_PACKS_ERROR,
  GET_PACK_REQUEST,
  GET_PACK_SUCCESS,
  GET_PACK_ERROR,
} from '../../constants/ActionKeys';

const initialState = {
  isRequesting: false,
  isSuccess: false,
  isError: false,
  error: null,
  data: null,
  pack: null,
};

const PacksReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_PACKS_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case GET_PACKS_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        data: payload,
      };
    case GET_PACKS_ERROR:
      return {
        ...state,
        isRequesting: false,
        isSuccess: false,
        isError: true,
        error: payload.error,
      };
    case GET_PACK_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };
      break;
    case GET_PACK_SUCCESS:
      return {
        ...state,
        isRequesting: false,
        isSuccess: true,
        isError: false,
        pack: payload,
      };
    case GET_PACK_ERROR:
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

export default PacksReducer;
