import React from 'react';
import styled from 'styled-components';

const grid = () => (
  <GridContainer>
    <Banner>Banner</Banner>
    <Address>Address</Address>
    <DeliveryServices>Randomized Delivery Services</DeliveryServices>
    <GoogleStuff>Google Stuff</GoogleStuff>
    <Menu>Super Duper Menu de la Mort qui Tue</Menu>
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
    <Test>test</Test>
  </GridContainer>
);

const GridContainer = styled.div`
  display: grid;
  width: 70vw;
  margin: 0 auto;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-auto-rows: 14vw;
`;

const Banner = styled.div`
display:flex;
align-items:center;
justify-content: center;

color: white;
vertical-align: center;
background-color: #111;
grid-column-start: 1;
grid-column-end: 6;
`;

const Address = styled.div`
display:flex;
align-items:center;
justify-content: center;

color: white;
background-color: #333;
`;

const DeliveryServices = styled.div`
display:flex;
align-items:center;
justify-content: center;

color: white;
background-color: #555;
grid-column-start: 2;
grid-column-end: 5;
`;

const GoogleStuff = styled.div`
display:flex;
align-items:center;
justify-content: center;

color: white;
background-color: #333;
`;

const Food = styled.div`
display:flex;
align-items:center;
justify-content: center;

color: gold;
background-color: #777;
`;

const Menu = styled.div`
display:flex;
align-items:center;
justify-content: center;

color: white;
background-color: #999;
grid-column-start: 2;
grid-column-end: 5;
grid-row-start: 3;
grid-row-end: 7;
`;

const Comments = styled.div`
display:flex;
align-items:center;
justify-content: center;

color: cyan;
background-color: #555;
grid-column-start: 1;
grid-column-end: 6;
`;

const Test = styled.div`
display:flex;
align-items:center;
justify-content: center;

color: red;
background-color: black;
`;

export default grid;
