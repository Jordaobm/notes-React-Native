import {RectButton} from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

interface ButtonContentProps {
  position?: number;
  color?: string;
}

export const ButtonContent = styled<ButtonContentProps>(RectButton)`
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  background-color: #b468ff;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 85%;
  top: 75%;

  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}

  ${(props) =>
    props.position &&
    css`
      top: ${`${props.position}%`};
    `}
`;

export const ButtonIcon = styled(Icon)``;
