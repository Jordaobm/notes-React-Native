import React from 'react';
import {NoteProvider} from './note';
import {ReminderProvider} from './reminder';

const AppProvider: React.FC = ({children}) => {
  return (
    <NoteProvider>
      <ReminderProvider>{children}</ReminderProvider>
    </NoteProvider>
  );
};

export default AppProvider;
