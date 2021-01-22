import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';
import Routes from './routes';
import {NoteProvider} from './hooks/note';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NoteProvider>
        <Routes />
      </NoteProvider>
    </>
  );
};

export default App;
