import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY};
  flex:1;
  border-top-left-radius: 24px;
  border-top-right-radius:24px;
  padding: 20px 23px 20px 23px;
`;
