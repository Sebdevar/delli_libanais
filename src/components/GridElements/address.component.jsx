import React from 'react';
import styled from 'styled-components';

// const googleMapLink = 'https://goo.gl/maps/6qSA6VKazErhkVPB6';

const Address = () => (
  <StyledIframe
    title="carte"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43670.13009501311!2d-71.29262538617927!3d46.836147265189204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897e95023b1df%3A0x70494d83c60ed07b!2sRestaurant%20libanais%20Lebourgneuf!5e0!3m2!1sen!2sca!4v1612990272867!5m2!1sen!2sca"
    width="240"
    height="240"
    frameBorder="0"
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  />
);

const StyledIframe = styled.iframe`
  border:0;
  transition: 0.2s all ease-out;
  grid-area: map;
  &:hover{
    transform: scale(1.03);
    transition: 0.2s all ease-out;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
  }
`;

export default Address;
