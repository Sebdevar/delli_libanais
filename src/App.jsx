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
  background-image:
    linear-gradient(
      to right,
      #f37500,
      #c75000 30%,
      #c75000 70%,
      #f37500
    );
`;

export default App;
