import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import {INote, IReminder} from '../../dtos/types';
import {useNote} from '../../hooks/note';
import {useReminder} from '../../hooks/reminder';
import {formatDate} from '../../utils/formatDate';
import {
  CardDate,
  CardInfo,
  CardTitleNote,
  ContainerButtonCard,
  DateExtens,
  Line,
  Title,
} from './styles';

interface CardProps {
  note?: INote;
  reminder?: IReminder;
}

const Card: React.FC<CardProps> = ({note, reminder}) => {
  const navigation = useNavigation();
  const {setNoteDetail} = useNote();
  const {setReminderDetail} = useReminder();
  if (note) {
    const handleEditNote = useCallback(
      (note: INote) => {
        setNoteDetail(note);
        navigation.navigate('NoteDetail');
      },
      [navigation, setNoteDetail],
    );

    return (
      <ContainerButtonCard
        onPress={() => {
          handleEditNote(note);
        }}>
        <Line />
        <CardInfo>
          <CardTitleNote>
            <Title>{note.title}</Title>
          </CardTitleNote>
          <CardDate>
            <DateExtens>{note.date}</DateExtens>
          </CardDate>
        </CardInfo>
      </ContainerButtonCard>
    );
  }

  if (reminder) {
    const handleReminderDetail = useCallback(
      (reminder: IReminder) => {
        setReminderDetail(reminder);
        navigation.navigate('ReminderDetail');
      },
      [navigation, setReminderDetail],
    );

    return (
      <ContainerButtonCard onPress={() => handleReminderDetail(reminder)}>
        <Line
          reminder={!!reminder}
          isAfter={formatDate(reminder.reminderDate)}
        />
        <CardInfo>
          <CardTitleNote>
            <Title>{reminder.reminderTitle}</Title>
          </CardTitleNote>
          <CardDate>
            <DateExtens>{reminder.reminderDate}</DateExtens>
          </CardDate>
        </CardInfo>
      </ContainerButtonCard>
    );
  }

  return <View />;
};

export default Card;
