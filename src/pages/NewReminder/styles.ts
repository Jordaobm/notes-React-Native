import {View} from 'react-native';
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

export const CardNewReminder = styled.View`
  width: 100%;
  height: 100%;
  min-height: 600px;
`;

interface LineProps {
  setErrInput: boolean;
}

export const Line = styled<LineProps>(View)`
  width: 100%;
  height: 5px;
  background-color: #00af5b;

  ${(props) =>
    props.setErrInput &&
    css`
      background-color: red;
    `}
`;

export const SaveNote = styled(RectButton)`
  width: 75px;
  height: 50px;
  background-color: #00af5b;
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

export const Picker = styled(RectButton)`
  width: 150px;
  height: 50px;
  background-color: #fe8947;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
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

export const DateText = styled.Text`
  width: 100%;
  font-family: Mulish-Light;
  font-size: 12px;
  color: #fe8947;
  margin: 20px 0px;
`;
//modal

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
  background-color: #00af5b;
  width: 70px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const DateAndTimeSelected = styled.Text`
  margin: 10px 0;
  font-family: Mulish-Light;
  font-size: 16px;
  color: #00af5b;
`;
