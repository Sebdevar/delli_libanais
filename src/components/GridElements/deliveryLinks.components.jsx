import React from 'react';
import styled from 'styled-components';

import DoordashLink from '../Links/doordashLink.component';
import UberEatsLink from '../Links/uberEatsLink.component';
import SkipLink from '../Links/skipLink.component';

function shuffle(array) {
  const output = array;

  for (let i = output.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }

  return output;
}

const shuffledLinks = shuffle([
  (<DoordashLink />),
  (<UberEatsLink />),
  (<SkipLink />),
]);

const deliveryLinks = () => (
  <DeliveryLinks>
    <StyledGrid>
      {shuffledLinks[0]}
      {shuffledLinks[1]}
      {shuffledLinks[2]}
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

grid-area: links;
`;

export default deliveryLinks;
