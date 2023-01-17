import styled from 'styled-components/native';
import {TextInput} from 'react-native'
export const Container = styled.View`
  
`;

export const InputName = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.RUBIK_MEDIUM};
color:  ${({theme}) => theme.COLORS.DARK_500};
font-size: 15px;
margin: 12px;
`

export const InputContainer = styled(TextInput)`
background-color: #fff;
height: 43px;
border-radius:10px;
font-family: ${({theme}) => theme.FONT_FAMILY.RUBIK_REGULAR};
color: ${({theme}) => theme.COLORS.DARK_400};
padding:12px;
font-size:15px;
`