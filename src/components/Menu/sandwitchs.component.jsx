import React from 'react';
import styled from 'styled-components';

import Menu from '../../MenuData';
import Item from './item.component';
import Price from './price.component';

const Sandwichs = () => (
  <>
    <Category>
      {Menu.sandwitch.name}
      {' - '}
      <Price price={Menu.sandwitch.prixSeul} />
      {' | '}
      Trio
      {' - '}
      <Price price={Menu.sandwitch.prixSeul} />
    </Category>
    <Note>{Menu.sandwitch.note}</Note>
    {Menu.sandwitch.items.map((item) => (
      <Item name={item.name} price={item.price} />
    ))}
  </>
);

const Category = styled.div`
  text-align: left;
  font-size: 23pt;
  font-family: 'Cinzel Decorative', cursive;
  ::first-letter {
    font-size: 130%;
  }
  padding-top: 15px;

  height:50px;

  grid-column-start: 1;
  grid-column-end: 3;
`;

const Note = styled.div`
  font-family: 'Lato', sans-serif;
  text-align:left;
  font-size: 12pt;
  line-height: 20px;
  padding-bottom: 5px;

  grid-column-start: 1;
  grid-column-end: 3;
`;

export default Sandwichs;
