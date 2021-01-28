import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import NotifService from '../services/NotifService';
import {transformDateAndTime} from '../utils/transformDateAndTime';
import AsyncStorage from '@react-native-community/async-storage';
import {not} from 'react-native-reanimated';

interface Notification {
  id?: number;
  title: string;
  message: string;
  reminderId: number;
  reminderDate: string;
}

interface NotificationContextData {
  createNotification(data: Notification): void;
  deleteNotification(reminderId: number): void;
  edditNotification(data: Notification): void;
}

const notifService = new NotifService();

const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData,
);

const NotificationProvider: React.FC = ({children}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notificationId, setNotificationID] = useState(0);

  useEffect(() => {
    async function loadNotifications() {
      const localNotif = await AsyncStorage.getItem('@notes:notifications');
      if (localNotif) {
        setNotifications(JSON.parse(localNotif));
      }
    }
    loadNotifications();
  }, []);

  useEffect(() => {
    async function loadNotificationsIds() {
      const localNotif = await AsyncStorage.getItem('@notes:ids');
      if (localNotif) {
        setNotificationID(JSON.parse(localNotif));
      }
    }
    loadNotificationsIds();
  }, []);

  // useEffect(() => {
  //   async function loadNotifications() {
  //     await AsyncStorage.removeItem('@notes:notifications');
  //   }
  //   loadNotifications();
  // }, []);

  // useEffect(() => {
  //   async function loadNotificationsIds() {
  //     await AsyncStorage.removeItem('@notes:ids');
  //   }
  //   loadNotificationsIds();
  // }, []);

  const deleteNotification = useCallback(
    (reminderId: number) => {
      const find = notifications.find((notf) => notf.reminderId === reminderId);

      if (find) {
        notifService.cancelNotif(find.id);
        const exclude = notifications.filter((notf) => notf.id !== find.id);
        setNotifications(exclude);
      }
    },
    [notifications],
  );

  const createNotification = useCallback(
    (data: Notification) => {
      const id = notificationId + 1;
      const parsedDate = transformDateAndTime(data.reminderDate);
      notifService.scheduleNotif(id, data.title, data.message, parsedDate);
      const newNot: Notification = {
        id,
        title: data.title,
        message: data.message,
        reminderDate: data.reminderDate,
        reminderId: data.reminderId,
      };
      setNotifications([...notifications, newNot]);
      setNotificationID(id);
    },
    [notificationId, notifications],
  );

  const edditNotification = useCallback(
    (data: Notification) => {
      const find = notifications.find(
        (notf) => notf.reminderId === data.reminderId,
      );
      if (find) {
        notifService.cancelNotif(find.id);
        const parsedDate = transformDateAndTime(data.reminderDate);
        notifService.scheduleNotif(
          find.id,
          data.title,
          data.message,
          parsedDate,
        );
        const findIndex = notifications.findIndex(
          (notf) => notf.id === find.id,
        );
        const edit: Notification = {
          id: find.id,
          message: data.message,
          reminderDate: data.reminderDate,
          reminderId: data.reminderId,
          title: data.title,
        };
        notifications.splice(findIndex, 1);

        setNotifications([...notifications, edit]);
      }
    },
    [notifications],
  );

  useEffect(() => {
    async function setNotifications() {
      await AsyncStorage.setItem(
        '@notes:notifications',
        JSON.stringify(notifications),
      );
    }
    setNotifications();
  }, [notifications]);

  useEffect(() => {
    async function setnotificationId() {
      await AsyncStorage.setItem('@notes:ids', JSON.stringify(notificationId));
    }
    setnotificationId();
  }, [notificationId]);

  console.log(notifications);

  return (
    <NotificationContext.Provider
      value={{createNotification, deleteNotification, edditNotification}}>
      {children}
    </NotificationContext.Provider>
  );
};

function useNotifications(): NotificationContextData {
  const context = useContext(NotificationContext);
  return context;
}

export {NotificationProvider, useNotifications};
