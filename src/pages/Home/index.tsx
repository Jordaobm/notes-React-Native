import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Card from '../../components/CardNote';
import Input from '../../components/Input';
import {INote} from '../../dtos/types';
import {useNote} from '../../hooks/note';
import {Container, Icone, SearchContainer} from './styles';

const Home: React.FC = () => {
  const {notes} = useNote();

  const [search, setSearch] = useState<INote[]>([]);

  const handleSearchNotes = useCallback(
    (data: string) => {
      if (data === '') {
        setSearch([]);
        return;
      }
      const result = notes.filter((note) => note.title.startsWith(data));
      setSearch(result);
    },
    [notes],
  );
  return (
    <Container>
      <SearchContainer>
        <Icone name="search" size={25} />
        <Input
          inputForm={false}
          name="search"
          placeholder="Search notes"
          onChangeText={(e) => handleSearchNotes(e)}
        />
      </SearchContainer>

      <ScrollView>
        {search.length > 0
          ? search.map((note) => {
              return <Card key={notes.indexOf(note)} note={note} />;
            })
          : notes.map((note) => {
              return <Card key={notes.indexOf(note)} note={note} />;
            })}
      </ScrollView>

      {/* <Navigation isHome={true} /> */}

      <Button name="plus" diretion="Note" />
    </Container>
  );
};

export default Home;
