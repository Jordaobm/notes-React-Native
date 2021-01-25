import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import Routes from './routes';
import AppProvider from './hooks';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
