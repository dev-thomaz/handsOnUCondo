import React from 'react';
import { TouchableOpacityProps } from 'react-native';

 import { Container } from './styles';

 type Props = TouchableOpacityProps

export function IconButton({children, ...rest}: Props){
  return( <Container {...rest} >
    {children}
  </Container>);
}
