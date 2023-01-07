import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import ScreenNavi from './src/Navigation/ScreenNavi';
import {Store} from './src/ReduxConfig/Store/ReduxStore';

const App = () => {
  return (
    <Provider store={Store}>
      <ScreenNavi />
    </Provider>
  );
};

export default App;

// if you want persistConfig

/*
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScreenNavi />
      </PersistGate>
    </Provider>
*/
