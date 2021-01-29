import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import StackNavigator from './routes';
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
        <StackNavigator />
      </AppProvider>
    </>
  );
};

export default App;
