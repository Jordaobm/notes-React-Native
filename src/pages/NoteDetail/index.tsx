import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import {useNote} from '../../hooks/note';
import {
  Container,
  ContentNote,
  NoteInfo,
  NoteTitle,
  NoteBody,
  NoteTitleText,
  NoteBodyText,
  IconContent,
  Line,
  ContentNoteLine,
  NoteBodyDate,
} from './styles';

const NoteDetail: React.FC = () => {
  const {noteDetail} = useNote();

  return (
    <Container>
      <ContentNote>
        <Line />
        <ContentNoteLine>
          <IconContent>
            <Icon name="align-justify" size={25} color="#fff" />
          </IconContent>
          <NoteInfo>
            <NoteTitle>
              <NoteTitleText>{noteDetail.title}</NoteTitleText>
            </NoteTitle>
            <NoteBody>
              <NoteBodyText>{noteDetail.body}</NoteBodyText>
              <NoteBodyDate>{noteDetail.date}</NoteBodyDate>
            </NoteBody>
          </NoteInfo>
        </ContentNoteLine>
      </ContentNote>

      <Button diretion="Home" name="arrow-left" />
      <Button color="#FE8947" position={55} name="edit" diretion="NoteEdit" />
      <Button color="red" position={65} name="trash" deleteNote={noteDetail} />
    </Container>
  );
};
export default NoteDetail;
