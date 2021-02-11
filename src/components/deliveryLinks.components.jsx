import React from 'react';
import styled from 'styled-components';

import DoordashLink from './doordashLink.component';
import UberEatsLink from './uberEatsLink.component';
import SkipLink from './skipLink.component';

const deliveryLinks = () => (
  <DeliveryLinks>
    <StyledGrid>
      <DoordashLink />
      <UberEatsLink />
      <SkipLink />
    </StyledGrid>
  </DeliveryLinks>
);

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-auto-rows: 240px;
`;

const DeliveryLinks = styled.div`
display:flex;
align-items:center;
justify-content: center;

color: white;
background-color: #555;
grid-column-start: 2;
grid-column-end: 5;
`;

export default deliveryLinks;
