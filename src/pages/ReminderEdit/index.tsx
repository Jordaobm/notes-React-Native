import {useNavigation} from '@react-navigation/native';
import {FormHandles} from '@unform/core';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {IReminder} from '../../dtos/types';
import AsyncStorage from '@react-native-community/async-storage';
import {Form} from '@unform/mobile';
import {Modal} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Feather';
import {useReminder} from '../../hooks/reminder';
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
  Picker,
  ModalHeader,
  TextHeader,
  ModalBody,
  SelectDate,
  SelectDateText,
  SelectHour,
  SelectHourText,
  SaveDateTimeModal,
  DateAndTimeSelected,
} from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import Input from '../../components/Input';
import {format} from 'date-fns';
import {useNotifications} from '../../hooks/notification';

const ReminderEdit: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  const {edditNotification} = useNotifications();

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const {reminders, setReminders, reminderDetail} = useReminder();

  const [errInput, setErrInput] = useState(false);

  const containerStyle = {backgroundColor: 'white', padding: 20};

  const [showDatePickerDate, setShowDatePickerDate] = useState(false);

  const [showDatePickerTime, setShowDatePickerTime] = useState(false);

  const remindDate = reminderDetail.reminderDate.split(' ')[0];
  const remindTime = reminderDetail.reminderDate.split(' ')[1];

  const [selectedDate, setSelectedDate] = useState(remindDate);

  const [selectedTime, setSelectedTime] = useState(remindTime);

  const handleToggleDatePickerDate = useCallback(() => {
    setShowDatePickerDate((state) => !state);
  }, []);

  const handleToggleDatePickerTime = useCallback(() => {
    setShowDatePickerTime((state) => !state);
  }, []);

  const handleDateChange = useCallback((event: any, date: Date) => {
    setShowDatePickerDate((state) => !state);
    if (date) {
      const parsedDate = format(date, "dd'/'MM'/'y");

      setSelectedDate(parsedDate);
    }
  }, []);

  const handleTimeChange = useCallback((event: any, time: Date) => {
    setShowDatePickerTime((state) => !state);
    if (time) {
      const parsedTime = format(time, "HH':'mm");
      setSelectedTime(parsedTime);
    }
  }, []);

  useEffect(() => {
    async function setStorageReminders() {
      await AsyncStorage.setItem(
        '@RememberMe:reminders',
        JSON.stringify(reminders),
      );
    }
    setStorageReminders();
  }, [reminders]);

  const handleSubmit = useCallback(
    async (data: IReminder) => {
      if (data.reminderTitle === '' || data.reminderBody === '') {
        setErrInput(true);
        Alert.alert('Erro', 'Preencha os dados do lembrete');
        return;
      }

      const findReminder = reminders.findIndex(
        (reminder) => reminder.reminderId === reminderDetail.reminderId,
      );

      const editReminder: IReminder = {
        reminderId: reminderDetail.reminderId,
        reminderTitle: data.reminderTitle,
        reminderBody: data.reminderBody,
        reminderDate: `${selectedDate} ${selectedTime}`,
      };

      reminders.splice(findReminder, 1);
      setReminders([...reminders, editReminder]);
      navigation.navigate('Reminders');
      edditNotification({
        title: data.reminderTitle,
        message: data.reminderBody,
        reminderDate: `${selectedDate} ${selectedTime}`,
        reminderId: reminderDetail.reminderId,
      });
    },
    [
      navigation,
      reminderDetail,
      reminders,
      setReminders,
      selectedDate,
      selectedTime,
      edditNotification,
    ],
  );

  return (
    <Container>
      <Content>
        <ScrollView>
          <CardNetNote>
            <Line errInput={errInput} />

            <Form
              initialData={{
                reminderTitle: reminderDetail.reminderTitle,
                reminderBody: reminderDetail.reminderBody,
              }}
              ref={formRef}
              onSubmit={handleSubmit}>
              <NoteTitle>
                <Input
                  onFocus={() => setErrInput(false)}
                  inputForm={true}
                  name="reminderTitle"
                  placeholder="Um titulo legal"
                />
              </NoteTitle>
              <NoteBody>
                <Input
                  onFocus={() => setErrInput(false)}
                  inputForm={true}
                  name="reminderBody"
                  placeholder="Algo para lembrar"
                  multiline={true}
                  numberOfLines={10}
                  style={{flex: 1, textAlignVertical: 'top'}}
                />
              </NoteBody>
              {selectedDate !== '' && selectedTime !== '' && (
                <DateAndTimeSelected>
                  {selectedDate} às {selectedTime}
                </DateAndTimeSelected>
              )}
              <NoteActions>
                <Picker onPress={showModal}>
                  <Icon name="clock" size={25} color="#fff" />
                </Picker>
                <SaveNote
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}>
                  <Icon name="edit" size={25} color="#fff" />
                </SaveNote>
                <CancelNote onPress={() => navigation.navigate('Reminders')}>
                  <Icon name="x" size={25} color="#fff" />
                </CancelNote>
              </NoteActions>
            </Form>
          </CardNetNote>
        </ScrollView>
      </Content>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <ModalHeader>
          <TextHeader>Defina uma data e hora para o lembrete</TextHeader>
        </ModalHeader>
        <ModalBody>
          <SelectDate onPress={handleToggleDatePickerDate}>
            <SelectDateText>Selecione uma data</SelectDateText>
            {showDatePickerDate && (
              <DateTimePicker
                value={new Date()}
                mode="date"
                onChange={handleDateChange}
              />
            )}
          </SelectDate>
          <SelectHour onPress={handleToggleDatePickerTime}>
            <SelectHourText>Selecione a Hora</SelectHourText>
            {showDatePickerTime && (
              <DateTimePicker
                value={new Date()}
                mode="time"
                display="spinner"
                onChange={handleTimeChange}
              />
            )}
          </SelectHour>
        </ModalBody>
        {selectedDate !== '' && selectedTime !== '' && (
          <DateAndTimeSelected>
            {selectedDate} às {selectedTime}
          </DateAndTimeSelected>
        )}
        <SaveDateTimeModal onPress={hideModal}>
          <Icon name="save" size={30} color="#fff" />
        </SaveDateTimeModal>
      </Modal>
    </Container>
  );
};

export default ReminderEdit;
