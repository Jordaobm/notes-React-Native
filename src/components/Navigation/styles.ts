import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';
import {Text, View} from 'react-native';

export const BottomNavigation = styled.View`
  width: 100%;
  height: 14%;
`;

export const HomeNotes = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 50px;
  border-radius: 5px;
`;
export const Reminders = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 50px;
  border-radius: 5px;
`;
export const Buttons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
export const Line = styled.View`
  width: 100%;
  height: 1px;
`;

interface IconeProps {
  colorIcon: boolean;
}

export const Icone = styled<IconeProps>(Icon)`
  color: black;

  ${(props) =>
    props.colorIcon &&
    css`
      color: #b468ff;
    `}
`;

export const TextIcon = styled<IconeProps>(Text)`
  font-family: Mulish-Light;
  color: black;

  ${(props) =>
    props.colorIcon &&
    css`
      color: #b468ff;
    `}
`;
