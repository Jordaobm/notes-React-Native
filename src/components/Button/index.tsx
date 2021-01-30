import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useNote} from '../../hooks/note';
import Note from '../../pages/Note';
import {ButtonContent, ButtonIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {INote, IReminder} from '../../dtos/types';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {useReminder} from '../../hooks/reminder';
import {useNotifications} from '../../hooks/notification';

interface ButtonProps extends RectButtonProperties {
  name?: string;
  diretion?: string;
  position?: number;
  color?: string;
  deleteNoteProps?: INote;
  deleteReminder?: IReminder;
}

const Button: React.FC<ButtonProps> = ({
  name,
  diretion,
  position,
  color,
  deleteNoteProps,
  deleteReminderProps,
}) => {
  const navigation = useNavigation();
  const {deleteNotification} = useNotifications();
  const {deleteNote} = useNote();
  const {deleteReminder} = useReminder();

  const handleDeleteNote = useCallback(
    async (deletingNote: INote) => {
      navigation.navigate('Home');
      deleteNote(deletingNote);
    },
    [deleteNote, navigation],
  );

  const handleDeleteReminder = useCallback(
    async (deletingReminder: IReminder) => {
      deleteNotification(deletingReminder.reminderId);
      navigation.navigate('Reminders');
      deleteReminder(deletingReminder);
    },
    [navigation, deleteNotification, deleteReminder],
  );

  if (diretion) {
    return (
      <ButtonContent
        position={position}
        color={color}
        onPress={() => navigation.navigate(diretion)}>
        <ButtonIcon name={name} size={25} color="#fff" />
      </ButtonContent>
    );
  }

  if (deleteNoteProps) {
    return (
      <ButtonContent
        position={position}
        color={color}
        onPress={() => handleDeleteNote(deleteNoteProps)}>
        <ButtonIcon name={name} size={25} color="#fff" />
      </ButtonContent>
    );
  }

  if (deleteReminderProps) {
    return (
      <ButtonContent
        position={position}
        color={color}
        onPress={() => handleDeleteReminder(deleteReminderProps)}>
        <ButtonIcon name={name} size={25} color="#fff" />
      </ButtonContent>
    );
  }

  return (
    <ButtonContent position={position} color={color}>
      <ButtonIcon name={name} size={25} color="#fff" />
    </ButtonContent>
  );
};
export default Button;
