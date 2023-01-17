import styled from 'styled-components/native';


export const Container = styled.View`
padding: 27px 17px 25px 22px;
background-color: ${( {theme}) => theme.COLORS.PURPLE};
margin-bottom:-20px;
`;


export const InfoArea = styled.View`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction: row;
margin: 0 0 20px 0;
`

export const Title = styled.Text`
font-size: 22px;
color: ${( {theme}) => theme.COLORS.WHITE};
font-family: ${( {theme}) => theme.FONT_FAMILY.ROBOTO_BOLD};
`

export const SearchArea = styled.View`

`

export const LeftInfo = styled.View`
align-items:center;
flex-direction:row;
gap:10px;
`
