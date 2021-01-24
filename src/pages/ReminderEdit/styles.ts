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
export const NoteActions = styled.View`
  width: 100%;
  height: 30%;
  flex-direction: row;
  justify-content: space-between;
`;

export const NoteBody = styled.View`
  width: 100%;
  height: 50%;
`;
export const NoteTitle = styled.View`
  width: 100%;
  height: 20%;
`;

interface LineProps {
  errInput: boolean;
}

export const Line = styled.View`
  width: 100%;
  height: 5px;
  background-color: #fe8947;

  ${(props) =>
    props.errInput &&
    css`
      background-color: red;
    `}
`;

export const SaveNote = styled(RectButton)`
  width: 75px;
  height: 50px;
  background-color: #fe8947;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const CancelNote = styled(RectButton)`
  width: 75px;
  height: 50px;
  background-color: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const CardNetNote = styled.View`
  width: 100%;
  height: 510px;
`;

export const DateAndTimeSelected = styled.Text`
  margin: 10px 0;
  font-family: Mulish-Light;
  font-size: 16px;
  color: #fe8947;
`;

export const Picker = styled(RectButton)`
  width: 150px;
  height: 50px;
  background-color: #ffd600;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.View`
  width: 100%;
  height: 50px;
`;

export const TextHeader = styled.Text`
  font-family: Mulish-Regular;
  font-size: 16px;
`;

export const ModalBody = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const SelectDate = styled(RectButton)`
  width: 45%;
  height: 50px;
  background-color: #ffd600;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const SelectDateText = styled.Text`
  font-family: Mulish-Regular;
  color: white;
`;

export const SelectHour = styled(RectButton)`
  width: 45%;
  height: 50px;
  background-color: #fe8947;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const SelectHourText = styled.Text`
  font-family: Mulish-Regular;
  color: white;
`;

export const CloseModal = styled(RectButton)`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  background-color: red;
`;

export const SaveDateTimeModal = styled(RectButton)`
  margin-top: 20px;
  background-color: #00af5b;
  width: 70px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
