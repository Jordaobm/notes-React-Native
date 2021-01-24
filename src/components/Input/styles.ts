import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TextInput = styled.TextInput`
  font-family: Mulish-Regular;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.name === 'title' &&
    css`
      font-size: 30px;
      font-family: Mulish-Bold;
      height: 100%;
    `}

  ${(props) =>
    props.name === 'body' &&
    css`
      font-size: 18px;
      font-family: Mulish-Regular;
      height: 100%;
    `}
    ${(props) =>
    props.name === 'reminderTitle' &&
    css`
      font-size: 30px;
      font-family: Mulish-Bold;
      height: 100%;
    `}

  ${(props) =>
    props.name === 'reminderBody' &&
    css`
      font-size: 18px;
      font-family: Mulish-Regular;
      height: 100%;
    `}
`;
