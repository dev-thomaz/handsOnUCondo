import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type ListItemTypeProps = 'INCOME' | 'EXPENSE'

type Props = {
    type: ListItemTypeProps;
}

export const Container = styled.View`
  background-color: #fff;
  height:56px;
  border-radius:16px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding: 18px;
  margin:8px 0;
`;

export const RecordInfoSide = styled(TouchableOpacity)`
flex:1;
height:100%;
`

export const Name = styled.Text<Props>`
font-family: ${({theme}) => theme.FONT_FAMILY.RUBIK_REGULAR};
color: ${({theme, type}) => type === 'EXPENSE' ? theme.COLORS.ORANGE : theme.COLORS.GREEN};

`
