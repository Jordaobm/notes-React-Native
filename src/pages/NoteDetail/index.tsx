import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import {useNote} from '../../hooks/note';
import {
  Container,
  ContentNote,
  NoteTitle,
  NoteBodyText,
  IconContent,
  Line,
  HeaderNote,
  ContentHeader,
  ContentBody,
  ContentFooter,
  NoteBodyDate,
} from './styles';
import Markdown from 'react-native-markdown-display';

const NoteDetail: React.FC = () => {
  const {noteDetail} = useNote();

  return (
    <Container>
      <ContentNote>
        <HeaderNote>
          <Line />
          <ContentHeader>
            <IconContent>
              <Icon name="align-justify" size={25} color="#fff" />
            </IconContent>
            <NoteTitle>{noteDetail.title}</NoteTitle>
          </ContentHeader>
          <ContentBody>
            <NoteBodyText>
              <Markdown style={styles}>{noteDetail.body}</Markdown>
            </NoteBodyText>
          </ContentBody>
          <ContentFooter>
            <NoteBodyDate>{noteDetail.date}</NoteBodyDate>
          </ContentFooter>
        </HeaderNote>
      </ContentNote>
      <Button diretion="Home" name="arrow-left" />
      <Button color="#FE8947" position={55} name="edit" diretion="NoteEdit" />
      <Button
        color="red"
        position={65}
        name="trash"
        deleteNoteProps={noteDetail}
      />
    </Container>
  );
};
export default NoteDetail;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Mulish-Regular',
  },
  heading1: {
    fontFamily: 'Mulish-Bold',
    fontSize: 28,
  },
  heading2: {
    fontFamily: 'Mulish-Bold',
    fontSize: 24,
  },
  heading3: {
    fontFamily: 'Mulish-Bold',
    fontSize: 20,
  },
  heading4: {
    fontFamily: 'Mulish-Bold',
    fontSize: 16,
  },
  heading5: {
    fontFamily: 'Mulish-Bold',
    fontSize: 12,
  },
  heading6: {
    fontFamily: 'Mulish-Bold',
    fontSize: 8,
  },
});
