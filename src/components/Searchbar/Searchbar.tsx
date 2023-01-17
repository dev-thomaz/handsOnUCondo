import React from 'react';
import { Text, View } from 'react-native';
import theme from '@theme';
 import { Container, IconArea, InputArea } from './styles';
import  Icon  from 'react-native-vector-icons/Feather';
export function Searchbar(){
  const myIcon = <Icon name="search" size={20} color={theme.COLORS.DARK_400} />;
  return( <Container>
    <IconArea>
      <Text>
        {myIcon}
      </Text>
    </IconArea>
   <InputArea placeholder='Pesquisar conta' placeholderTextColor={theme.COLORS.DARK_400} />
  </Container>);
}
