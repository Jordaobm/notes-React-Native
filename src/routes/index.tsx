import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from '../pages/Home';
import Note from '../pages/Note';
import NoteDetail from '../pages/NoteDetail';
import NoteEdit from '../pages/NoteEdit';
import Reminders from '../pages/Reminders';
import NewReminder from '../pages/NewReminder';
import ReminderDetail from '../pages/ReminderDetail';
import ReminderEdit from '../pages/ReminderEdit';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Tutorial, Tutorial2, Tutorial3} from '../pages/Tutorial';

const TabNavigatorTutorial: React.FC = () => {
  const TabTutorial = createMaterialTopTabNavigator();
  return (
    <TabTutorial.Navigator
      initialRouteName="Tutorial"
      backBehavior="order"
      tabBarPosition="bottom"
      tabBarOptions={{
        activeTintColor: '#b468ff',
        inactiveTintColor: '#000',
        showIcon: true,
        activeTintColor: '#b468ff',
        inactiveTintColor: '#000',
        style: {
          backgroundColor: '#fff',
        },
        labelStyle: {
          textAlign: 'center',
          fontFamily: 'Mulish-Regular',
          fontSize: 12,
          textTransform: 'capitalize',
        },
        indicatorStyle: {
          borderBottomColor: '#b468ff',
          borderBottomWidth: 2,
          borderTopWidth: 0,
        },
      }}>
      <TabTutorial.Screen
        name="Tutorial"
        component={Tutorial}
        options={{
          tabBarLabel: 'Notas',
        }}
      />
      <TabTutorial.Screen
        name="Tutorial2"
        component={Tutorial2}
        options={{
          tabBarLabel: 'Lembretes',
        }}
      />
      <TabTutorial.Screen
        name="Tutorial3"
        component={Tutorial3}
        options={{
          tabBarLabel: 'Markdown',
        }}
      />
    </TabTutorial.Navigator>
  );
};

const TabNavigator: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="order"
      tabBarPosition="bottom"
      tabBarOptions={{
        activeTintColor: '#b468ff',
        inactiveTintColor: '#000',
        showIcon: true,
        activeTintColor: '#b468ff',
        inactiveTintColor: '#000',
        style: {
          backgroundColor: '#fff',
        },
        labelStyle: {
          textAlign: 'center',
          fontFamily: 'Mulish-Light',
          fontSize: 12,
          textTransform: 'capitalize',
        },
        indicatorStyle: {
          borderBottomColor: '#fff',
          borderBottomWidth: 2,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            //Your icon component for example =>
            focused ? (
              <Icon name="home" size={25} color="#b468ff" />
            ) : (
              <Icon name="home" size={25} color="#000" />
            ),
        }}
      />
      <Tab.Screen
        name="Reminders"
        component={Reminders}
        options={{
          tabBarIcon: ({focused}) =>
            //Your icon component for example =>
            focused ? (
              <Icon name="clock" size={25} color="#b468ff" />
            ) : (
              <Icon name="clock" size={25} color="#000" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="TabNavigatorTutorial"
        mode="modal">
        <Stack.Screen
          name="TabNavigatorTutorial"
          component={TabNavigatorTutorial}
        />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="NoteDetail" component={NoteDetail} />
        <Stack.Screen name="NoteEdit" component={NoteEdit} />
        <Stack.Screen name="NewReminder" component={NewReminder} />
        <Stack.Screen name="ReminderDetail" component={ReminderDetail} />
        <Stack.Screen name="ReminderEdit" component={ReminderEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
