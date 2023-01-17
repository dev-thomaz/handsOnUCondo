import styled from 'styled-components/native';
import { TextInput } from 'react-native';
export const Container = styled.View`
flex-direction:row;
  background-color:blue;
  margin: 0 0 20px 0;
  height:56px;
  border-radius: 100px;
  align-items:center;
padding:0;
overflow:hidden;
  justify-content: flex-start;
  background-color:#fff;
`;

export const IconArea = styled.View`
background:#fff;
width:60px;
height:56px;
justify-content:center;
align-items:center;
`

export const InputArea = styled(TextInput)`
flex:1;
background-color:#fff;
font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO_REGULAR};
color: ${({theme}) => theme.COLORS.DARK_400};
height:56px;
font-size:15px;
`
