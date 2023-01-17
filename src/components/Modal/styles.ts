import styled from 'styled-components/native';




export const Container = styled.View`
  position:absolute;
  background: rgba(0,0,0,0.2);
  align-items:center;
  justify-content:center;
  z-index:10;
  width:100%;
  height:100%;
  transition: 0.2em;
  
`;


export const ModalContent = styled.View`
background-color: #fff;
padding:42px;
align-items:center;
border-radius:16px;
`

export const RegularText = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.RUBIK_REGULAR};
color: ${({theme}) => theme.COLORS.DARK_400};
font-size:15px;
`


export const MediumText = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.RUBIK_MEDIUM};
color: ${({theme}) => theme.COLORS.DARK_500};
font-size:15px;
margin-top:12px;
`

export const ActionArea = styled.View`
flex-direction: row;
justify-content:space-between;
align-items: center;
margin-top:23px;
`

