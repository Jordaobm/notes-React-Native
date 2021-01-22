import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useNote} from '../../hooks/note';
import Note from '../../pages/Note';
import {ButtonContent, ButtonIcon} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import INote from '../../dtos/INote';

interface ButtonProps {
  name?: string;
  diretion?: string;
  position?: number;
  color?: string;
  deleteNote?: INote;
}

const Button: React.FC<ButtonProps> = ({
  name,
  diretion,
  position,
  color,
  deleteNote,
}) => {
  const navigation = useNavigation();

  const {notes, setNotes, setNoteDetail} = useNote();

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

  return (
    <ButtonContent position={position} color={color}>
      <ButtonIcon name={name} size={25} color="#fff" />
    </ButtonContent>
  );
};
export default Button;
