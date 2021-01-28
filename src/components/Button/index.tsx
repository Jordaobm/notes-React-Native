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
  deleteNote?: INote;
  deleteReminder?: IReminder;
}

const Button: React.FC<ButtonProps> = ({
  name,
  diretion,
  position,
  color,
  deleteNote,
  deleteReminder,
}) => {
  const navigation = useNavigation();
  const {deleteNotification} = useNotifications();

  const {notes, setNotes, setNoteDetail} = useNote();
  const {reminders, setReminders, setReminderDetail} = useReminder();

  const handleDeleteNote = useCallback(
    async (deletingNote: INote) => {
      navigation.navigate('Home');
      const filter = notes.filter((note) => note.id !== deletingNote.id);
      setNotes(filter);

      await AsyncStorage.setItem('@RememberMe:note', JSON.stringify(filter));
      setNoteDetail({
        body: '',
        date: '',
        title: '',
      });
    },
    [notes, navigation, setNotes, setNoteDetail],
  );

  const handleDeleteReminder = useCallback(
    async (deletingReminder: IReminder) => {
      deleteNotification(deletingReminder.reminderId);
      navigation.navigate('Reminders');
      const filter = reminders.filter(
        (reminder) => reminder.reminderId !== deletingReminder.reminderId,
      );
      setReminders(filter);

      await AsyncStorage.setItem(
        '@RememberMe:reminders',
        JSON.stringify(filter),
      );
      setReminderDetail({} as IReminder);
    },
    [
      navigation,
      reminders,
      setReminders,
      setReminderDetail,
      deleteNotification,
    ],
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

  if (deleteNote) {
    return (
      <ButtonContent
        position={position}
        color={color}
        onPress={() => handleDeleteNote(deleteNote)}>
        <ButtonIcon name={name} size={25} color="#fff" />
      </ButtonContent>
    );
  }

  if (deleteReminder) {
    return (
      <ButtonContent
        position={position}
        color={color}
        onPress={() => handleDeleteReminder(deleteReminder)}>
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
