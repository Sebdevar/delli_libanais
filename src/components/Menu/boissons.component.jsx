import React from 'react';
import styled from 'styled-components';

import Item from './item.component';
import Menu from '../../MenuData';

const Boissons = () => (
  <StyledItem>
    <Category>
      {Menu.boissons.name}
    </Category>
    {Menu.boissons.items.map((item) => (
      <Item key={item.name} name={item.name} price={item.price} />
    ))}
  </StyledItem>
);

const StyledItem = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-column-gap: 27px;
  grid-row-gap: 5px;
`;

const Category = styled.div`
  text-align: left;
  font-size: 23pt;
  font-family: 'Cinzel Decorative', cursive;

  ::first-letter {
    font-size: 130%;
  }

  padding-top: 15px;
  height: 50px;
`;

export default Boissons;
