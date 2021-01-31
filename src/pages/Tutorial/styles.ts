import {SafeAreaView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Safe = styled(SafeAreaView)`
  background-color: #fff;
  flex: 1;
  padding-top: 10%;
`;
export const Button = styled(RectButton)`
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  background-color: #00af5b;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 81%;
  top: 80%;
`;

export const TextButton = styled.Text`
  font-family: Mulish-Regular;
  font-size: 16px;
  color: #fff;
`;
