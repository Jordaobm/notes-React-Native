import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {
  BottomNavigation,
  Buttons,
  HomeNotes,
  Line,
  Reminders,
  Icone,
  TextIcon,
} from './styles';

interface NavigationProps {
  isHome: boolean;
}

const Navigation: React.FC<NavigationProps> = ({isHome}) => {
  const navigation = useNavigation();

  const handleNavigationHomeNote = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handleNavigationReminders = useCallback(() => {
    navigation.navigate('Reminders');
  }, [navigation]);

  return (
    <BottomNavigation>
      <Line />
      <Buttons>
        <HomeNotes onPress={handleNavigationHomeNote}>
          <Icone name="home" size={25} colorIcon={isHome} />
          <TextIcon colorIcon={isHome}>Notes</TextIcon>
        </HomeNotes>
        <Reminders onPress={handleNavigationReminders}>
          <Icone name="clock" size={25} colorIcon={!isHome} />
          <TextIcon colorIcon={!isHome}>Reminders</TextIcon>
        </Reminders>
      </Buttons>
    </BottomNavigation>
  );
};
export default Navigation;
