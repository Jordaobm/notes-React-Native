import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Note from '../pages/Note';
import NoteDetail from '../pages/NoteDetail';
import NoteEdit from '../pages/NoteEdit';
import Reminders from '../pages/Reminders';
import NewReminder from '../pages/NewReminder';
import ReminderDetail from '../pages/ReminderDetail';
import ReminderEdit from '../pages/ReminderEdit';

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
        <Route.Screen name="Reminders" component={Reminders} />
        <Route.Screen name="NewReminder" component={NewReminder} />
        <Route.Screen name="ReminderDetail" component={ReminderDetail} />
        <Route.Screen name="ReminderEdit" component={ReminderEdit} />
      </Route.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
