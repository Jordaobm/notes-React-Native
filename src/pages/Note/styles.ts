import {RectButton} from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 2%;
  background-color: #fff;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 50px 20px;
`;
export const NoteTitle = styled.View`
  width: 100%;
  height: 20%;
`;
export const NoteBody = styled.View`
  width: 100%;
  height: 60%;
`;

export const NoteActions = styled.View`
  width: 100%;
  height: 20%;
  flex-direction: row;
  justify-content: space-between;
`;

interface LineProps {
  errInput: boolean;
}

export const Line = styled.View`
  width: 100%;
  height: 5px;
  background-color: #b468ff;
  ${(props) =>
    props.errInput &&
    css`
      background-color: red;
    `}
`;

export const SaveNote = styled(RectButton)`
  width: 100px;
  height: 50px;
  background-color: #b468ff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const CancelNote = styled(RectButton)`
  width: 100px;
  height: 50px;
  background-color: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const CardNetNote = styled.View`
  width: 100%;
`;
