import {Post_Api} from '../../../ApiConsult/ApiHelper';
import {BASE_URL, LOGIN} from '../../../Apis/Api';
import {responseCodes} from '../../../Comman/constant';
import {
  CLEAR_DATA,
  LOGIN_DONE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  UNAUTHORIZED,
} from '../../ActionsList';

export function doLogin(params) {
  console.log('doLogin', params);
  return async function (dispatch) {
    dispatch({type: LOGIN_LOADING});
    Post_Api(LOGIN, params)
      .then(response => {
        switch (response.status) {
          case responseCodes.OK:
            dispatch({type: LOGIN_DONE, data: response});
            break;
          case responseCodes.UNAUTHORIZED:
            dispatch({
              type: UNAUTHORIZED,
              message: '', // you have to add your message
            });
            break;
          default:
            dispatch({type: LOGIN_FAIL, message: ''}); // you have to add your message
        }
      })
      .catch(error => {
        dispatch({type: LOGIN_FAIL, message: error});
      });
  };
}

export function clearLoginData() {
  return async function (dispatch) {
    dispatch({type: CLEAR_DATA});
  };
}
