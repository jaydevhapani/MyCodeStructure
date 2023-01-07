import axios from 'axios';
import {LOGIN} from '../Apis/Api';

/*
  you can set your Header config. as well your backend side needed.
  this is normal default header config.
*/

//Normal Config
const Config = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  authorization: 'Bearer ' + global.AccessToken,
};

// Multi_Part Config
const Multi_Part_Config = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data',
  authorization: 'Bearer ' + global.AccessToken,
};

//Normal_Post
export const Post_Api = (Url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(Url, params, Config)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

//Form_Data_Post
export const Post_Form_Data_Api = (Url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(Url, params, Multi_Part_Config)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};

//Normal_Get
export const Get_Api = (Url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .get(Url, params, Config)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
