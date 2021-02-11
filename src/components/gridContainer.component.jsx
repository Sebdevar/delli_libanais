import React from 'react';
import styled from 'styled-components';

import Banner from './GridElements/banner.component';
import Address from './GridElements/address.component';
import DeliveryLinks from './GridElements/deliveryLinks.components';
import Menu from './GridElements/menu.component';
import GoogleScore from './googleScore.component';

const grid = () => (
  <GridContainer>
    <Banner />
    <Address />
    <DeliveryLinks />
    <GoogleScore>Google Stuff</GoogleScore>
    <Menu />
    <Food>\^o^/ Food! ＼(ﾟｰﾟ＼)</Food>
    <Food>\^o^/ Food! ＼(ﾟｰﾟ＼)</Food>
    <Food>\^o^/ Food! ＼(ﾟｰﾟ＼)</Food>
    <Food>\^o^/ Food! ＼(ﾟｰﾟ＼)</Food>
    <Food>\^o^/ Food! ＼(ﾟｰﾟ＼)</Food>
    <Food>\^o^/ Food! ＼(ﾟｰﾟ＼)</Food>
    <Food>\^o^/ Food! ＼(ﾟｰﾟ＼)</Food>
    <Food>\^o^/ Food! ＼(ﾟｰﾟ＼)</Food>
    <Comments>
      Fantastic! |-| (*￣3￣)╭ |-| Much Good!
      <br />
      o(*°▽°*)o |-| Such Wow! |-| (ﾉ◕ヮ◕)ﾉ
      <br />
      Very Quality! |-| ~(￣▽￣)~ |-| Incredible!
    </Comments>
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
`;

const Food = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gold;
  background-color: #777;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: cyan;
  background-color: #555;
  grid-column-start: 1;
  grid-column-end: 6;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  background-color: black;
  grid-column-start: 1;
  grid-column-end: 6;
`;

export default grid;
