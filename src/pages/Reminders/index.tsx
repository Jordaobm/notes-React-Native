import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Card from '../../components/CardNote';
import Input from '../../components/Input';
import Navigation from '../../components/Navigation';
import {IReminder} from '../../dtos/types';
import {useReminder} from '../../hooks/reminder';
import {Container, SearchContainer, Icone} from './styles';

const Reminders: React.FC = () => {
  const {reminders} = useReminder();

  const [search, setSearch] = useState<IReminder[]>([]);

  const handleSearchReminders = useCallback(
    (data: string) => {
      if (data === '') {
        setSearch([]);
        return;
      }
      const result = reminders.filter((reminder) =>
        reminder.reminderTitle.startsWith(data),
      );
      setSearch(result);
    },
    [reminders],
  );

  return (
    <Container>
      <SearchContainer>
        <Icone name="search" size={25} />
        <Input
          inputForm={false}
          name="search"
          placeholder="Search reminders"
          onChangeText={(e) => handleSearchReminders(e)}
        />
      </SearchContainer>

      <ScrollView>
        {search.length > 0
          ? search.map((reminder) => {
              return <Card key={reminder.reminderId} reminder={reminder} />;
            })
          : reminders.map((reminder) => (
              <Card key={reminder.reminderId} reminder={reminder} />
            ))}
      </ScrollView>

      <Navigation isHome={false} />

      <Button name="plus" diretion="NewReminder" color="#00AF5B" />
    </Container>
  );
};

export default Reminders;
