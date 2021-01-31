import React from 'react';
import {Image, StatusBar} from 'react-native';
import {Container, Safe, Button} from './styles';
import b1 from '../../assets/01.png';
import b2 from '../../assets/02.png';
import b3 from '../../assets/03.png';
import b4 from '../../assets/04.png';
import b5 from '../../assets/05.png';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export const Tutorial: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Image source={b1} style={{width: 200, height: 500}} />
        <Button onPress={() => navigation.navigate('Tutorial2')}>
          <Icon name="arrow-right" size={30} color="#fff" />
        </Button>
      </Container>
    </>
  );
};

export const Tutorial2: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Image source={b2} style={{width: 200, height: 500}} />
        <Button onPress={() => navigation.navigate('Tutorial3')}>
          <Icon name="arrow-right" size={30} color="#fff" />
        </Button>
      </Container>
    </>
  );
};

export const Tutorial3: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Safe>
        <ScrollView>
          <Container>
            <Image source={b3} style={{width: 200, height: 500}} />
            <Image source={b4} style={{width: 200, height: 500}} />
            <Image source={b5} style={{width: 200, height: 500}} />
          </Container>
        </ScrollView>

        <Button
          style={{top: '85%'}}
          onPress={() => navigation.navigate('TabNavigator')}>
          <Icon name="thumbs-up" size={30} color="#fff" />
        </Button>
      </Safe>
    </>
  );
};
