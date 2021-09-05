import {
  GET_PACKS_REQUEST,
  GET_PACKS_SUCCESS,
  GET_PACKS_ERROR,
  GET_PACK_REQUEST,
  GET_PACK_SUCCESS,
  GET_PACK_ERROR,
} from '../../constants/ActionKeys';
import {
  GetAllPacksService,
  GetSinglePackService,
} from '../../services/PacksService';

export const GetAllPacksRequestAsync = data => {
  return dispatch => {
    dispatch(GetAllPacksRequest());
    GetAllPacksService(dispatch, data);
  };
};

const GetAllPacksRequest = () => {
  return {
    type: GET_PACKS_REQUEST,
    payload: null,
  };
};

export const GetAllPacksSuccess = data => {
  return {
    type: GET_PACKS_SUCCESS,
    payload: data?.data,
  };
};

export const GetAllPacksError = data => {
  alert("error ", GET_PACKS_ERROR)
  return {
    type: GET_PACKS_ERROR,
    payload: data,
  };
};

// Get Sigle Pack Info
export const GetPackRequestAsync = data => {
  return dispatch => {
    dispatch(GetPackRequest());
    GetSinglePackService(dispatch, data);
  };
};

const GetPackRequest = () => {
  return {
    type: GET_PACK_REQUEST,
    payload: null,
  };
};

export const GetPackSuccess = data => {
  return {
    type: GET_PACK_SUCCESS,
    payload: data,
  };
};

export const GetPackError = data => {
  return {
    type: GET_PACK_ERROR,
    payload: data,
  };
};
