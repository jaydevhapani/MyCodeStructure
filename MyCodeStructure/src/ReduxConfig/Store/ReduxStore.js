import {legacy_createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../Reducer/ReduxReducer';

var initialState = {};

const composedEnhancers = compose(applyMiddleware(thunk)); //  this is for Asynchronism

export const Store = legacy_createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

/* 
Note : if you want use store like async storage then you can use below code 
and install redux-persist;

import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['addRatting'],
};

const composedEnhancers = compose(applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};
const configureStore = () => {
  const store = createStore(persistedReducer, initialState, composedEnhancers);
  const persistor = persistStore(store);
  return {store, persistor};
};

*/
