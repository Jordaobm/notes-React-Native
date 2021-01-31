import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import {StyleSheet} from 'react-native';
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
  ReminderTitle,
  Header,
  ContentBody,
  ContentFooter,
} from './styles';
import {formatDate} from '../../utils/formatDate';
import Markdown from 'react-native-markdown-display';

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
        <Header>
          <IconContent isAfter={formatDate(reminderDetail.reminderDate)}>
            <Icon name="align-justify" size={25} color="#fff" />
          </IconContent>
          <ReminderTitle>{reminderDetail.reminderTitle}</ReminderTitle>
        </Header>
        <ContentBody>
          <Markdown style={styles}>{reminderDetail.reminderBody}</Markdown>
        </ContentBody>
        <ContentFooter>
          <NoteBodyDate isAfter={formatDate(reminderDetail.reminderDate)}>
            {reminderDetail.reminderDate}
          </NoteBodyDate>
        </ContentFooter>
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
        deleteReminderProps={reminderDetail}
      />
    </Container>
  );
};

export default ReminderDetail;

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
