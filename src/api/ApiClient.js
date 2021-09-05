import axios from 'axios';
import Logger from '../utils/logger';
import {getToken, notifyMessage} from '../utils/util';
export default class ApiClient {
  static BASE_URL = 'http://iptseapi.kilobyte.live/v1';

  static REQUEST_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  };

  static addCommonHeaders(headers) {
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';
    return headers;
  }

  /**
   *
   * @param {*} method to use for api request -> GET, POST, DELETE, PUT
   * @param {*} url - endpoint to append after baseUrl
   * @param {*} payload - to send with request
   * @param {*} params - to append as query strings
   * @param {*} apiHeaders - additional headers
   * @param {*} isAuthTokenRequired - if true must pass the token with API request
   * @returns
   */
  static async call(
    method,
    url,
    payload,
    params,
    apiHeaders,
    isAuthTokenRequired = true,
    token = '',
  ) {
    let headers = apiHeaders ? apiHeaders : {};
    let requestParams = params ? params : {};

    headers = this.addCommonHeaders(headers);
    const token2 = await getToken();
    Logger.log('Web Service AccessToken:', token2);
    if (isAuthTokenRequired) {
      // headers['Authorization'] = 'Bearer ' + token2;
      headers['Authorization'] = token2;
    }
    let axiosInstance = axios.create({baseURL: this.BASE_URL});
    Logger.log('Web Service Url:', `${this.BASE_URL}${url}`);
    Logger.log('Web Service Method:', method);
    Logger.log('Web Service payload:', JSON.stringify(payload));
    Logger.log('Web Service headers:', JSON.stringify(headers));
    Logger.log('Web Service params:', JSON.stringify(requestParams));

    try {
      let response = await axiosInstance.request({
        method: method,
        url: url,
        data: JSON.stringify(payload),
        params: requestParams,
        headers: headers,
      });
      notifyMessage(JSON.stringify(response));
      Logger.log('Web Service Response:', JSON.stringify(response));
      if (response.status === 200) {
        if (response.data != null) {
          return response.data;
        } else {
          throw new Error('Something went wrong');
        }
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      notifyMessage(JSON.stringify(error));
      Logger.log('API-Error:', JSON.stringify(error));
      throw error;
    }
  }
}
