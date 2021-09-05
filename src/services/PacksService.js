import {
  GetAllPacksSuccess,
  GetAllPacksError,
  GetPackSuccess,
  GetPackError,
} from '../redux/actions/PacksActions';
import ApiClient from '../api/ApiClient';
import API_ENDPOINTS from '../constants/ApiEndpoints';

export const GetAllPacksService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.GET,
      API_ENDPOINTS.PACKS,
      null,
      null,
      null,
      true,
      null,
    );
    dispatch(GetAllPacksSuccess(result));
  } catch (error) {
    dispatch(GetAllPacksError(error.message));
  }
};

export const GetSinglePackService = async (dispatch, data) => {
  try {
    const result = await ApiClient.call(
      ApiClient.REQUEST_METHOD.GET,
      API_ENDPOINTS.PACK.replace('{packId}', data?.packId),
      null,
      null,
      null,
      true,
      null,
    );
    dispatch(GetPackSuccess(result));
  } catch (error) {
    dispatch(GetPackError(error.message));
  }
};
