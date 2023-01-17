import styled from 'styled-components/native';
export const Container = styled.View`
    flex: 2;
    background-color: #fff;
    
`;

export const ContentHeader = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
`

export const HeaderTitle = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.RUBIK_REGULAR};
font-size: 20px;
color:  ${({theme}) => theme.COLORS.DARK};
`

export const Counter = styled.Text`
font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO_REGULAR};
font-size: 15px;
color:  ${({theme}) => theme.COLORS.GRAY_400};
`