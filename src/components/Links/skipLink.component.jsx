import React from 'react';
import styled from 'styled-components';

import skipLogo from '../../images/SkipLogo.webp';

const skipURL = 'https://www.skipthedishes.com';

const deliveryLinks = () => (
  <Link
    href={skipURL}
    target="_blank"
    alt="Order Food Delivery with Skip the Dishes"
    title="Order Food Delivery with Skip the Dishes"
  >
    <Image src={skipLogo} alt="Commander avec Skip the Dishes" />
  </Link>
);

const Image = styled.img`
  width: 240px
`;

const Link = styled.a`
  text-decoration: none;
  transition: 0.2s all ease-out;
  &:hover{
    transform: scale(1.03);
    transition: 0.2s all ease-out;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
  }
`;

export default deliveryLinks;
