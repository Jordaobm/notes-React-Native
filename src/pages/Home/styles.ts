import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';
import {Image} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 2%;
`;

export const Icone = styled(Icon)`
  width: 40px;
`;

export const SearchContainer = styled.View`
  width: 100%;
  background-color: #e6e6e6;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;

  flex-direction: row;
  align-items: center;
`;
export const Clear = styled(RectButton)`
  width: 50px;
  height: 50px;
  background-color: red;
`;

export const ContentImg = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`;
export const Img = styled(Image)`
  margin: 20% 0;
  width: 400px;
  height: 400px;
`;
