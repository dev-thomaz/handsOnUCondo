import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native'
export const Container = styled.View`
  
`;

export const InputName = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.RUBIK_MEDIUM};
color:  ${({theme}) => theme.COLORS.DARK_500};
font-size: 15px;
margin: 12px;
z-index:99;
`

export const InputContainer = styled(TouchableOpacity)`
background-color: #fff;
height: 43px;
border-radius:10px;
flex-direction:row;
justify-content:space-around;
align-items:center;
padding:12px;
`

export const DropdownData = styled.View`
flex:1;
`
export const DropdownDataText = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.RUBIK_REGULAR};
color: ${({theme}) => theme.COLORS.DARK_400};
font-size:15px

`
export const DropDownOptions = styled.View`
background-color: #fff;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
padding:10px;
justify-content:space-around;
align-items:flex-start;

`

export const DropdownOptionsItem = styled(TouchableOpacity)`
height:43px;
width:100%;
justify-content:center;
`