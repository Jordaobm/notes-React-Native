import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  flex-direction: row;
`;

interface LineProps {
  reminder?: boolean;
  isAfter?: boolean;
}

export const Line = styled<LineProps>(View)`
  width: 5px;
  height: 60px;
  background-color: #b468ff;

  ${(props) =>
    props.isAfter
      ? css`
          background-color: #00af5b;
        `
      : css`
          background-color: #f65555;
        `}
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
export const DateExtens = styled.Text`
  font-family: Mulish-Light;
  font-size: 16px;
`;
