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
`;

export default App;
