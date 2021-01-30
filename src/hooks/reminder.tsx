import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {IReminder} from '../dtos/types';
import AsyncStorage from '@react-native-community/async-storage';

interface ReminderContextData {
  addReminder(reminder: IReminder): void;
  edditReminder(reminder: IReminder): void;
  deleteReminder(reminder: IReminder): void;
  reminders: IReminder[];
  setReminders(reminders: IReminder[]): void;

  reminderDetail: IReminder;
  setReminderDetail(reminder: IReminder): void;
}

const ReminderContext = createContext<ReminderContextData>(
  {} as ReminderContextData,
);

const ReminderProvider: React.FC = ({children}) => {
  const [reminders, setReminders] = useState<IReminder[]>([]);
  const [reminderDetail, setReminderDetail] = useState<IReminder>(
    {} as IReminder,
  );

  useEffect(() => {
    async function getStorageReminders() {
      const StorageReminders = await AsyncStorage.getItem(
        '@RememberMe:reminders',
      );
      if (StorageReminders) {
        const parseReminders = JSON.parse(StorageReminders);
        setReminders(parseReminders);
      }
    }
    getStorageReminders();
  }, []);

  const addReminder = useCallback(
    (reminder: IReminder) => {
      const newReminder: IReminder = {
        reminderId: reminder.reminderId,
        reminderTitle: reminder.reminderTitle,
        reminderBody: reminder.reminderBody,
        reminderDate: reminder.reminderDate,
      };

      setReminders([...reminders, newReminder]);
    },
    [reminders],
  );

  const edditReminder = useCallback(
    (data: IReminder) => {
      const findIndex = reminders.findIndex(
        (find) => find.reminderId === data.reminderId,
      );
      const edit: IReminder = {
        reminderId: data.reminderId,
        reminderTitle: data.reminderTitle,
        reminderBody: data.reminderBody,
        reminderDate: data.reminderDate,
      };
      reminders.splice(findIndex, 1);
      setReminders([...reminders, edit]);
    },
    [reminders],
  );

  const deleteReminder = useCallback(
    (data: IReminder) => {
      const filter = reminders.filter(
        (filter) => filter.reminderId !== data.reminderId,
      );

      setReminders(filter);
    },
    [reminders],
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
    <ReminderContext.Provider
      value={{
        reminders,
        addReminder,
        edditReminder,
        deleteReminder,
        reminderDetail,
        setReminderDetail,
        setReminders,
      }}>
      {children}
    </ReminderContext.Provider>
  );
};

function useReminder(): ReminderContextData {
  const context = useContext(ReminderContext);

  return context;
}

export {useReminder, ReminderProvider};
