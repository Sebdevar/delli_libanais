import React from 'react';
import styled from 'styled-components';

import Menu from '../../MenuData';
import WideItem from './wideItem.component';

const Sandwichs = () => (
  <>
    <Category>
      {Menu.sandwich.name}
    </Category>
    <Note>{Menu.sandwich.note}</Note>
    <Header>
      <PricingHeader>Seul</PricingHeader>
      <PricingHeader>Trio</PricingHeader>
    </Header>
    {Menu.sandwich.items.map((item) => (
      <WideItem name={item.name} price1={item.prixSeul} price2={item.prixTrio} />
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
  height: 50px;
  grid-column-start: 1;
  grid-column-end: 3;
`;

const PricingHeader = styled.div`
  padding-right: 35px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: right;
  font-family: 'Cinzel Decorative', cursive;
  font-weight: bold;
`;

const Note = styled.div`
  font-family: 'Lato', sans-serif;
  text-align: left;
  font-size: 12pt;
  padding-bottom: 5px;
  white-space: pre-wrap;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export default Sandwichs;
