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
      <PricingHeaderSeul>Seul</PricingHeaderSeul>
      <PricingHeaderTrio>Trio</PricingHeaderTrio>
    </Header>
    {Menu.sandwich.items.map((item) => (
      <WideItem key={item.name} name={item.name} price1={item.prixSeul} price2={item.prixTrio} />
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

  @media only screen and (max-device-width: 480px) {
    grid-column-start: none;
    grid-column-end: none;
  }
`;

const PricingHeaderTrio = styled.div`
  padding-right: 35px;

  @media only screen and (max-device-width: 480px) {
    display: inline;
    padding-right: 1em;
    text-align: right;
  }
`;

const PricingHeaderSeul = styled.div`
  padding-right: 35px;

  @media only screen and (max-device-width: 480px) {
    display: inline;
    padding-right: 2.5em;
    text-align: right;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: right;
  font-family: 'Cinzel Decorative', cursive;
  font-weight: bold;

  @media only screen and (max-device-width: 480px) {
    grid-column-start: none;
    grid-column-end: none;
    display: block;
    padding-left: 10px;
    padding-right: 10px;
    width: 1fr;
    color: white;
    margin-bottom: 5px;
    font-size: 12pt;
  }
`;

const Note = styled.div`
  font-family: 'Lato', sans-serif;
  text-align: left;
  font-size: 12pt;
  padding-bottom: 5px;
  white-space: pre-wrap;
  grid-column-start: 1;
  grid-column-end: 3;

  @media only screen and (max-device-width: 480px) {
    grid-column-start: none;
    grid-column-end: none;
    font-size: 11pt;
  }
`;

export default Sandwichs;
