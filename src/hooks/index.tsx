import React from 'react';
import {NoteProvider} from './note';
import {NotificationProvider} from './notification';
import {ReminderProvider} from './reminder';

const AppProvider: React.FC = ({children}) => {
  return (
    <NoteProvider>
      <ReminderProvider>
        <NotificationProvider>{children}</NotificationProvider>
      </ReminderProvider>
    </NoteProvider>
  );
};

export default AppProvider;
