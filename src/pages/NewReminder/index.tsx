import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  TextInput,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import {
  CancelNote,
  CardNewReminder,
  Container,
  Content,
  Line,
  NoteActions,
  NoteBody,
  NoteTitle,
  SaveNote,
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
import Input from '../../components/Input';
import {useNavigation} from '@react-navigation/native';
import {FormHandles} from '@unform/core';
import {Alert, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Form} from '@unform/mobile';
import Icon from 'react-native-vector-icons/Feather';
import {IReminder} from '../../dtos/types';
import {useReminder} from '../../hooks/reminder';
import {Modal} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import {useNotification} from '../../hooks/notification';

const NewReminder: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  const {addNotificationSchedule} = useNotification();

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  const containerStyle = {backgroundColor: 'white', padding: 20};

  const navigation = useNavigation();

  const {addReminder, reminders} = useReminder();

  const formRef = useRef<FormHandles>(null);

  const [errInput, setErrInput] = useState(false);

  const [showDatePickerDate, setShowDatePickerDate] = useState(false);

  const [showDatePickerTime, setShowDatePickerTime] = useState(false);

  const [selectedDate, setSelectedDate] = useState('');

  const [selectedTime, setSelectedTime] = useState('');

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

  const handleSubmitReminder = useCallback(
    async (data: IReminder) => {
      if (data.reminderTitle === '') {
        setErrInput(true);
        Alert.alert(
          'Erro',
          'Prencha ao menos um título e selecione um horário clicando no botão laranjado abaixo',
        );
        return;
      }

      if (selectedTime === '' || selectedDate === '') {
        setErrInput(true);
        Alert.alert('Erro', 'Preencha um horário válido');
        return;
      }

      const id = new Date().valueOf();
      addReminder({
        reminderId: id,
        reminderTitle: data.reminderTitle,
        reminderBody: data.reminderBody,
        reminderDate: `${selectedDate} ${selectedTime}`,
      });

      addNotificationSchedule(
        id,
        data.reminderTitle,
        data.reminderBody,
        selectedDate,
        selectedTime,
      );

      navigation.navigate('Reminders');
      formRef.current.clearField('reminderTitle');
      formRef.current.clearField('reminderBody');
    },
    [
      addReminder,
      navigation,
      selectedDate,
      selectedTime,
      addNotificationSchedule,
    ],
  );

  useEffect(() => {
    async function setStorageReminders() {
      await AsyncStorage.setItem(
        '@RememberMe:reminders',
        JSON.stringify(reminders),
      );
    }
    setStorageReminders();
  }, [reminders]);

  return (
    <Container>
      <Content>
        <ScrollView>
          <CardNewReminder>
            <Line setErrInput={errInput} />
            <Form ref={formRef} onSubmit={handleSubmitReminder}>
              <NoteTitle>
                <Input
                  onFocus={() => setErrInput(false)}
                  inputForm={true}
                  name="reminderTitle"
                  placeholder="Título do lembrete"
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
                  <Icon name="save" size={25} color="#fff" />
                </SaveNote>

                <CancelNote onPress={() => navigation.navigate('Reminders')}>
                  <Icon name="x" size={25} color="#fff" />
                </CancelNote>
              </NoteActions>
            </Form>
          </CardNewReminder>
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

export default NewReminder;
