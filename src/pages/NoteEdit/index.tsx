import React, {useCallback, useRef, useState} from 'react';
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
import {Alert} from 'react-native';
import {INote} from '../../dtos/types';

const NoteEdit: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const {edditNotes, noteDetail} = useNote();

  const [errInput, setErrInput] = useState(false);

  const handleSubmit = useCallback(
    async (data: INote) => {
      if (data.title === '' || data.body === '') {
        setErrInput(true);
        Alert.alert('Erro', 'Preencha sua nova nota');
        return;
      }
      edditNotes(data);
      navigation.navigate('Home');
    },
    [edditNotes, navigation],
  );

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
