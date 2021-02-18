import React from 'react';
import styled from 'styled-components';

import Banner from './GridElements/banner.component';
import Address from './GridElements/address.component';
import DeliveryLinks from './GridElements/deliveryLinks.components';
import Menu from './GridElements/menu.component';
import GoogleScore from './GridElements/googleScore.component';
import Food from './GridElements/food.component';
import Comments from './GridElements/comments.component';
import Footer from './GridElements/footer.component';

const grid = () => (
  <GridContainer>
    <Banner />
    <Address />
    <DeliveryLinks />
    <GoogleScore />
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
    <Footer />
  </GridContainer>
);

const GridContainer = styled.div`
  display: grid;
  width: 1200px;
  margin: 0 auto;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: repeat(7, 240px) 100px;
  grid-template-areas:
    "banner banner banner banner banner"
    "map links links links score"
    ". menu menu menu ."
    ". menu menu menu ."
    ". menu menu menu ."
    ". menu menu menu ."
    "comments comments comments comments comments"
    "footer footer footer footer footer";

  @media only screen and (max-device-width: 480px) {
    width: 100vw;
    grid-template-columns: 33vw 33vw 33vw;
    grid-template-rows: repeat(7, 33vw) 100px;
    grid-template-areas:
      "banner banner banner"
      "links links links"
      "menu menu menu"
      "menu menu menu"
      "menu menu menu"
      "menu menu menu"
      "menu menu menu"
      "menu menu menu"
      "menu menu menu"
      "menu menu menu"
      "menu menu menu"
      "menu menu menu"
      "menu menu menu"
      "comments comments comments"
      "footer footer footer";
  }
`;

export default grid;
