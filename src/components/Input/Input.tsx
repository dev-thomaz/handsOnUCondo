import theme from '@theme';
import React from 'react';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
    title:string;
}


import { Container, InputName, InputContainer } from './styles';

export function Input({title, ...rest}: Props){
  return (<Container>
    <InputName>{title}</InputName>
    <InputContainer {...rest} placeholderTextColor={theme.COLORS.DARK_400} />
  </Container>);
}
