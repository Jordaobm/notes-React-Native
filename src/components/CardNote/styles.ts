import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  flex-direction: row;
`;

export const Line = styled.View`
  width: 5px;
  height: 60px;
  background-color: yellow;
`;

export const CardInfo = styled.View`
  margin-left: 10px;
`;

export const CardTitleNote = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: Mulish-ExtraBold;
  font-size: 25px;
`;

export const CardDate = styled.View`
  width: 100%;
`;
export const Date = styled.Text`
  font-family: Mulish-Light;
  font-size: 16px;
`;
