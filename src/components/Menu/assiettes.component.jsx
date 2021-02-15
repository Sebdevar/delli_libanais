import React from 'react';
import styled from 'styled-components';

import Menu from '../../MenuData';
import Item from './item.component';

const Assiettes = () => (
  <>
    <Category>{Menu.assiettes.name}</Category>
    <Note>{Menu.assiettes.note}</Note>
    {Menu.assiettes.items.map((item) => (
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

  height:50px;

  grid-column-start: 1;
  grid-column-end: 3;
`;

const Note = styled.div`
  font-family: 'Lato', sans-serif;
  text-align:left;
  font-size: 12pt;
  padding-bottom: 5px;
  white-space: pre-wrap;

  grid-column-start: 1;
  grid-column-end: 3;
`;

export default Assiettes;
