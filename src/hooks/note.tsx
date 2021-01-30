import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {INote} from '../dtos/types';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface NoteContext {
  notes: INote[];
  setNotes(notes: INote[]): void;
  addNotes(data: INote): void;
  edditNotes(data: INote): void;
  deleteNote(data: INote): void;

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

  const addNotes = useCallback(
    (data: INote) => {
      const date = new Date();

      const parsedDate = format(date, "EEEE',' d',' LLLL", {locale: ptBR});

      const id = date.valueOf();

      const note: INote = {
        id: `${id}`,
        title: data.title,
        body: data.body,
        date: parsedDate,
      };

      setNotes([...notes, note]);
    },
    [notes],
  );

  const edditNotes = useCallback(
    (data: INote) => {
      const date = new Date();

      const parsedDate = format(date, "EEEE',' d',' LLLL", {locale: ptBR});

      const findIndexNote = notes.findIndex(
        (note) => note.id === noteDetail.id,
      );

      const editNote = {
        id: noteDetail.id,
        title: data.title,
        body: data.body,
        date: parsedDate,
      };

      notes.splice(findIndexNote, 1);

      setNotes([...notes, editNote]);
    },
    [noteDetail.id, notes],
  );

  const deleteNote = useCallback(
    (note: INote) => {
      const filter = notes.filter((nt) => nt.id !== note.id);
      setNotes(filter);
    },
    [notes],
  );

  useEffect(() => {
    async function setStorageNote() {
      await AsyncStorage.setItem('@RememberMe:note', JSON.stringify(notes));
    }
    setStorageNote();
  }, [notes]);

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        addNotes,
        edditNotes,
        deleteNote,
        noteDetail,
        setNoteDetail,
      }}>
      {children}
    </NoteContext.Provider>
  );
};

function useNote(): NoteContext {
  const context = useContext(NoteContext);

  return context;
}

export {useNote, NoteProvider};
