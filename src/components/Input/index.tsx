import React, {useEffect, useRef} from 'react';
import {TextInputProps} from 'react-native';
import {Container, TextInput} from './styles';
import {useField} from '@unform/core';

interface InputProps extends TextInputProps {
  name: string;
  inputForm: boolean;
}

interface InputValueReference {
  value: string;
}
const Input: React.FC<InputProps> = ({name, inputForm, ...rest}) => {
  if (inputForm) {
    const inputElementRef = useRef<any>(null);
    const {registerField, defaultValue = '', fieldName, error} = useField(name);
    const inputValueRef = useRef<InputValueReference>({value: defaultValue});

    useEffect(() => {
      registerField<string>({
        name: fieldName,
        ref: inputValueRef.current,
        path: 'value',
        setValue(ref: any, value) {
          inputValueRef.current.value = value;
          inputElementRef.current.setNativeProps({text: value});
        },
        clearValue() {
          inputValueRef.current.value = '';
          inputElementRef.current.clear();
        },
      });
    }, [fieldName, registerField]);

    return (
      <Container>
        <TextInput
          {...rest}
          name={name}
          ref={inputElementRef}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          defaultValue={defaultValue}
        />
      </Container>
    );
  }

  return (
    <Container>
      <TextInput {...rest} name={name} />
    </Container>
  );
};
export default Input;
