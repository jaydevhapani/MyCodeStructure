import {
  CLEAR_DATA,
  LOGIN_DONE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  UNAUTHORIZED,
} from '../../ActionsList';

const initialState = {
  isLoading: false,
  actions: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {...state, isLoading: true, actions: action};
    case LOGIN_DONE:
    case LOGIN_FAIL:
    case UNAUTHORIZED:
      return {...state, isLoading: false, actions: action};
    case CLEAR_DATA:
      return {...state, isLoading: false, actions: undefined};
    default:
      return state;
  }
};
