import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Input from '../../components/Input';
import {
  Container,
  NoteTitle,
  NoteBody,
  Content,
  Line,
  NoteActions,
  SaveNote,
  CancelNote,
  CardNetNote,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {useNote} from '../../hooks/note';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {INote} from '../../dtos/types';

const NoteEdit: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const {setNotes, notes, noteDetail} = useNote();

  const [errInput, setErrInput] = useState(false);

  const handleSubmit = useCallback(
    async (data: INote) => {
      if (data.title === '' || data.body === '') {
        setErrInput(true);
        Alert.alert('Erro', 'Preencha sua nova nota');
        return;
      }
      const date = new Date();

      const parsedDate = format(date, "EEEE',' d',' LLLL", {locale: ptBR});

      const findIndexNote = notes.findIndex(
        (note) => note.id === noteDetail.id,
      );

      const editNote = {
        id: noteDetail.id,
        title: data.title,
        body: data.body,
        date: parsedDate,
      };

      notes.splice(findIndexNote, 1);

      setNotes([...notes, editNote]);

      navigation.navigate('Home');
    },
    [navigation, noteDetail, notes, setNotes],
  );

  useEffect(() => {
    async function setStorageNote() {
      await AsyncStorage.setItem('@RememberMe:note', JSON.stringify(notes));
    }
    setStorageNote();
  }, [notes]);

  return (
    <Container>
      <Content>
        <CardNetNote>
          <Line errInput={errInput} />

          <Form
            initialData={{title: noteDetail.title, body: noteDetail.body}}
            ref={formRef}
            onSubmit={handleSubmit}>
            <NoteTitle>
              <Input
                onFocus={() => setErrInput(false)}
                inputForm={true}
                name="title"
                placeholder="Um titulo legal"
              />
            </NoteTitle>
            <NoteBody>
              <Input
                onFocus={() => setErrInput(false)}
                inputForm={true}
                name="body"
                placeholder="Algo para lembrar"
                multiline={true}
                numberOfLines={10}
                style={{flex: 1, textAlignVertical: 'top'}}
              />
            </NoteBody>
            <NoteActions>
              <SaveNote
                onPress={() => {
                  formRef.current?.submitForm();
                }}>
                <Icon name="edit" size={25} color="#fff" />
              </SaveNote>
              <CancelNote onPress={() => navigation.navigate('Home')}>
                <Icon name="x" size={25} color="#fff" />
              </CancelNote>
            </NoteActions>
          </Form>
        </CardNetNote>
      </Content>
    </Container>
  );
};
export default NoteEdit;
