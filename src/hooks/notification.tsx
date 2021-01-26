import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import NotifService from '../services/NotifService';
import {transformDateAndTime} from '../utils/transformDateAndTime';

interface Notification {
  id: number;
  reminderId: number;
}

interface NotificationContextData {
  notification: Notification[];
  addNotificationSchedule(
    reminderId: number,
    title: string,
    message: string,
    selectedDate: string,
    selectedTime: string,
  ): void;

  cancelNotificationSchedule(reminderId: number): void;
}

const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData,
);

const NotificationProvider: React.FC = ({children}) => {
  const notifications = new NotifService();

  const [notification, setNotification] = useState<Notification[]>([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    async function getStorageNotification() {
      const StorageNotification = await AsyncStorage.getItem(
        '@RememberMe:notification',
      );
      if (StorageNotification) {
        const parseNotification = JSON.parse(StorageNotification);
        setNotification(parseNotification);
      }
    }
    getStorageNotification();
  }, []);

  useEffect(() => {
    async function getStorageNotification() {
      const StorageNotification = await AsyncStorage.getItem(
        '@RememberMe:lastId',
      );
      if (StorageNotification) {
        const parseNotification = JSON.parse(StorageNotification);
        setLastId(parseNotification);
      }
    }
    getStorageNotification();
  }, []);

  // useEffect(() => {
  //   async function getStorageNotification() {
  //     await AsyncStorage.removeItem('@RememberMe:notification');
  //   }
  //   getStorageNotification();
  // }, []);

  // useEffect(() => {
  //   async function getStorageNotification() {
  //     await AsyncStorage.removeItem('@RememberMe:notification');
  //   }
  //   getStorageNotification();
  // }, []);

  const addNotificationSchedule = useCallback(
    (
      reminderId: number,
      title: string,
      message: string,
      selectedDate: string,
      selectedTime: string,
    ) => {
      const id = lastId + 1;
      const parsedDate = transformDateAndTime(selectedDate, selectedTime);
      notifications.scheduleNotif(id, title, message, parsedDate);
      const newNot: Notification = {
        id: id,
        reminderId: reminderId,
      };
      setNotification([...notification, newNot]);
      setLastId(id);
    },
    [notifications, lastId, notification],
  );

  const cancelNotificationSchedule = useCallback(
    (reminderId: number) => {
      const findNotification = notification.find(
        (notif) => notif.reminderId === reminderId,
      );
      if (findNotification) {
        notifications.cancelNotif(findNotification.id);
        const edditNotifications = notification.filter(
          (notif) => notif.id !== findNotification.id,
        );

        setNotification(edditNotifications);
      }
    },
    [notifications, notification],
  );

  useEffect(() => {
    async function setStorageReminders() {
      await AsyncStorage.setItem(
        '@RememberMe:notification',
        JSON.stringify(notification),
      );
    }
    setStorageReminders();
  }, [notification]);

  useEffect(() => {
    async function setStorageReminders() {
      await AsyncStorage.setItem('@RememberMe:lastId', JSON.stringify(lastId));
    }
    setStorageReminders();
  }, [lastId]);

  return (
    <NotificationContext.Provider
      value={{
        notification,
        addNotificationSchedule,
        cancelNotificationSchedule,
      }}>
      {children}
    </NotificationContext.Provider>
  );
};

function useNotification(): NotificationContextData {
  const context = useContext(NotificationContext);
  return context;
}

export {useNotification, NotificationProvider};
