import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import INote from '../../dtos/INote';
import {useNote} from '../../hooks/note';
import {
  CardDate,
  CardInfo,
  CardTitleNote,
  Container,
  Date,
  Line,
  Title,
} from './styles';

interface CardProps {
  note: INote;
}

const Card: React.FC<CardProps> = ({note}) => {
  const navigation = useNavigation();
  const {setNoteDetail} = useNote();
  const handleEditNote = useCallback(
    (note: INote) => {
      setNoteDetail(note);
      navigation.navigate('NoteDetail');
    },
    [navigation, setNoteDetail],
  );

  return (
    <Container
      onPress={() => {
        handleEditNote(note);
      }}>
      <Line />
      <CardInfo>
        <CardTitleNote>
          <Title>{note.title}</Title>
        </CardTitleNote>
        <CardDate>
          <Date>{note.date}</Date>
        </CardDate>
      </CardInfo>
    </Container>
  );
};

export default Card;
