import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { IconButton } from '../IconButton/IconButton';
import theme from '@theme'
import { Container, Name, ListItemTypeProps, RecordInfoSide } from './styles';

export type ListItemProps = TouchableOpacityProps & {
    name:string;
    type: ListItemTypeProps;
    onDeleteClick: () => void
}


export function ListItem({name, type, onDeleteClick, ...rest}: ListItemProps){

function callDeleteModal(){
  onDeleteClick() 
}

    const trashIcon = <Icon name="trash" size={20} color={theme.COLORS.GRAY_400}/>;
  return(
    <Container>
      <RecordInfoSide  {...rest}>
        <Name type={type}>{name}</Name>
      </RecordInfoSide>
        <IconButton onPress={() => callDeleteModal()}>
        {trashIcon}
        </IconButton>
    </Container>
  );
}

export default ListItem;