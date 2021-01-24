import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';
import Routes from './routes';
import AppProvider from './hooks';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
};

export default App;
