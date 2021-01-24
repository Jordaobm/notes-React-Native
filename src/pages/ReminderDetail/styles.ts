import {View} from 'react-native';
import styled, {css} from 'styled-components/native';
export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 2%;
  background-color: #fff;
`;

export const ContentNote = styled.View`
  width: 100%;

  padding: 50px 20px;
  /* background-color: green; */
`;

export const ContentNoteLine = styled.View`
  flex-direction: row;
`;

interface LineProps {
  isAfter?: boolean;
}
export const Line = styled<LineProps>(View)`
  width: 100%;
  height: 5px;
  background-color: #fe8947;
  margin-bottom: 20px;

  ${(props) =>
    props.isAfter
      ? css`
          background-color: #00af5b;
        `
      : css`
          background-color: #f65555;
        `}
`;

export const IconContent = styled<LineProps>(View)`
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  background-color: #fe8947;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isAfter
      ? css`
          background-color: #00af5b;
        `
      : css`
          background-color: #f65555;
        `}
`;
export const NoteInfo = styled.View`
  /* background-color: red; */
  flex: 1;
  padding: 0 10px;
`;

export const NoteTitle = styled.View`
  width: 100%;
  min-height: 60px;
  justify-content: center;
`;

export const NoteTitleText = styled.Text`
  font-family: Mulish-Bold;
  font-size: 30px;
  line-height: 32px;
`;

export const NoteBody = styled.View``;
export const NoteBodyText = styled.Text`
  font-family: Mulish-Regular;
  font-size: 18px;
  line-height: 20px;
  /* or 150% */

  /* Opacity / Black 50% */

  color: rgba(0, 0, 0, 0.5);
`;

export const NoteBodyDate = styled.Text`
  font-family: Mulish-ExtraLight;
  font-size: 15px;
  line-height: 24px;
  /* or 150% */

  /* Opacity / Black 50% */

  color: #fe8947;
`;
