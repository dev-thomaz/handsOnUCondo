import React from 'react';
import { Text, View } from 'react-native';
import {ListItem} from '@components';
import { ViewProps } from 'react-native';
import { Container } from './styles';


type Props = ViewProps 
export function ContentBody({children}: Props){
  return( <Container>
   {children}
  </Container>);
}
