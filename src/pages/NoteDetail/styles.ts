import styled from 'styled-components/native';
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
export const Line = styled.View`
  width: 100%;
  height: 5px;
  background-color: #fe8947;
  margin-bottom: 20px;
`;

export const IconContent = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  background-color: #fe8947;
  align-items: center;
  justify-content: center;
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
