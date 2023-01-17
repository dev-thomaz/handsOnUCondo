import React from 'react';
 import { Container, LoadingIndicator } from './styles';
import theme from '@theme';
export const Loading: React.FC = () => {
  return(
     <Container>
        <LoadingIndicator/>
  </Container>
  );
}

