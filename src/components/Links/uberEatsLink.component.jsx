import React from 'react';
import styled from 'styled-components';

import uberEatsLogo from '../../images/UberEatsLogo.webp';

const uberEatsURL = 'https://www.ubereats.com/ca/quebec-city/food-delivery/restaurant-libanais-lebourgneuf/JLgp0uwaTle0aGw1S-psGA';

const deliveryLinks = () => (
  <Link
    href={uberEatsURL}
    target="_blank"
    alt="Order Food Delivery with UberEats"
    title="Order Food Delivery with UberEats"
  >
    <Image src={uberEatsLogo} alt="Commander avec UberEats" />
  </Link>
);

const Image = styled.img`
  width: 240px
`;

const Link = styled.a`
  width: 241px;
  text-decoration: none;
  background-color:rgb(19,34,40);
  transition: 0.2s all ease-out;
  &:hover{
    transform: scale(1.03);
    transition: 0.2s all ease-out;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
  }
`;

export default deliveryLinks;
