import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Note from '../pages/Note';
import NoteDetail from '../pages/NoteDetail';
import NoteEdit from '../pages/NoteEdit';

const Routes: React.FC = () => {
  const Route = createStackNavigator();
  return (
    <NavigationContainer>
      <Route.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Route.Screen name="Home" component={Home} />
        <Route.Screen name="Note" component={Note} />
        <Route.Screen name="NoteDetail" component={NoteDetail} />
        <Route.Screen name="NoteEdit" component={NoteEdit} />
      </Route.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
