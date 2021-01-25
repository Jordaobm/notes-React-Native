import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import {useNote} from '../../hooks/note';
import {useReminder} from '../../hooks/reminder';
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
import {formatDate} from '../../utils/formatDate';

const ReminderDetail: React.FC = () => {
  const navigation = useNavigation();
  const {reminderDetail} = useReminder();

  if (!reminderDetail) {
    navigation.navigate('Reminders');
  }

  return (
    <Container>
      <ContentNote>
        <Line isAfter={formatDate(reminderDetail.reminderDate)} />
        <ContentNoteLine>
          <IconContent isAfter={formatDate(reminderDetail.reminderDate)}>
            <Icon name="align-justify" size={25} color="#fff" />
          </IconContent>
          <NoteInfo>
            <NoteTitle>
              <NoteTitleText>{reminderDetail.reminderTitle}</NoteTitleText>
            </NoteTitle>
            <NoteBody>
              <NoteBodyText>{reminderDetail.reminderBody}</NoteBodyText>
              <NoteBodyDate>{reminderDetail.reminderDate}</NoteBodyDate>
            </NoteBody>
          </NoteInfo>
        </ContentNoteLine>
      </ContentNote>

      <Button diretion="Reminders" name="arrow-left" />
      <Button
        color="#FE8947"
        position={55}
        name="edit"
        diretion="ReminderEdit"
      />
      <Button
        color="red"
        position={65}
        name="trash"
        deleteReminder={reminderDetail}
      />
    </Container>
  );
};

export default ReminderDetail;
