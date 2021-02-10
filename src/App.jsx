import React from 'react';
import styled from 'styled-components';

import GridContainer from './components/gridContainer.component';

const App = () => (
  <AppContainer>
    <GridContainer />
  </AppContainer>
);

const AppContainer = styled.div`
  text-align: center;
  background-image: linear-gradient(to right,
    #d35400,
    #f07400 30%,
    #f07400 70%,
    #d35400);
`;

export default App;
