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
  background-image: linear-gradient(to right, #d35400, #ff7b00 30%, #ff7b00 70%, #d35400);
`;

export default App;
