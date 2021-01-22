import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import INote from '../dtos/INote';

interface NoteContext {
  notes: INote[];
  setNotes(notes: INote[]): void;

  noteDetail: INote;
  setNoteDetail(note: INote): void;
}

const NoteContext = createContext<NoteContext>({} as NoteContext);

const NoteProvider: React.FC = ({children}) => {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    async function getStorageNote() {
      const StorageNotes = await AsyncStorage.getItem('@RememberMe:note');
      if (StorageNotes) {
        const parseNote = JSON.parse(StorageNotes);
        setNotes(parseNote);
      }
    }
    getStorageNote();
  }, []);

  const [noteDetail, setNoteDetail] = useState<INote>({
    id: '',
    body: '',
    date: '',
    title: '',
  });

  return (
    <NoteContext.Provider value={{notes, setNotes, noteDetail, setNoteDetail}}>
      {children}
    </NoteContext.Provider>
  );
};

function useNote(): NoteContext {
  const context = useContext(NoteContext);

  return context;
}

export {useNote, NoteProvider};
