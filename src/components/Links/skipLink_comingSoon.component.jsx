import React from 'react';
import styled from 'styled-components';

import skipLogo from '../../images/SkipLogo.webp';

const deliveryLinks = () => (
  <NotLink>
    <Image src={skipLogo} alt="Commander avec Skip the Dishes" />
    <ComingSoon />
  </NotLink>
);

const ComingSoon = styled.div`
  width: 240px;
  height: 240px;
  float: left;

  position: absolute;
  left: 0px;
  top: 0px;
  background-color: rgba(117, 117, 117, 0.698);
  font-weight: bold;
  font-size: 60pt;

  &::after {
    font-family: 'Lateef', cursive;
    content: "Bientôt!";
    transform: rotate(-30deg);
    position: absolute;
    left: 20px;
    top: 70px;
    color: #f3c600;
    text-shadow: 0 0 15px #0e92c2;

    @media only screen and (max-device-width: 480px) {
      left: 10px;
      top: 40px;
    }
  }

  @media only screen and (max-device-width: 480px) {
    width: 33.33vw;
    height: 33.33vw;
    font-size: 30pt;
  }
`;

const Image = styled.img`
  width: 240px;

  @media only screen and (max-device-width: 480px) {
    width: 33.33vw;
    height: 33.33vw;
  }
`;

const NotLink = styled.div`
position: relative;
  text-decoration: none;
  transition: 0.2s all ease-out;
  &:hover{
    transform: scale(1.03);
    transition: 0.2s all ease-out;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
    z-index: 1000;
  }

  @media only screen and (max-device-width: 480px) {
    width: 33.33vw;
    height: 33.33vw;
  }
`;

export default deliveryLinks;
