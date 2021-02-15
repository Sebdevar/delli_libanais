import React from 'react';
import styled from 'styled-components';

import Banner from './GridElements/banner.component';
import Address from './GridElements/address.component';
import DeliveryLinks from './GridElements/deliveryLinks.components';
import Menu from './GridElements/menu.component';
import GoogleScore from './GridElements/googleScore.component';
import Food from './GridElements/food.component';
import Comments from './GridElements/comments.component';

const grid = () => (
  <GridContainer>
    <Banner />
    <Address />
    <DeliveryLinks />
    <GoogleScore>Google Stuff</GoogleScore>
    <Menu />
    <Food number="2" />
    <Food number="3" />
    <Food number="7" />
    <Food number="10" />
    <Food number="4" />
    <Food number="5" />
    <Food number="6" />
    <Food number="9" />
    <Comments />
    <Footer>
      Footer
    </Footer>
  </GridContainer>
);

const GridContainer = styled.div`
  display: grid;
  width: 1200px;
  margin: 0 auto;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-auto-rows: 240px;

  grid-template-areas:
    "banner banner banner banner banner"
    "map links links links score"
    ". menu menu menu ."
    ". menu menu menu ."
    ". menu menu menu ."
    ". menu menu menu ."
    "comments comments comments comments comments"
    "footer footer footer footer footer";
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  background-color: black;
  grid-area: footer;
`;

export default grid;
