import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    ©
    {' '}
    <a href="https://github.com/Sebdevar">Sébastien De Varennes</a>
    {' '}
    &
    {' '}
    <a href="https://github.com/kikiwako">Vincent Girard</a>
  </FooterContainer>
);

const FooterContainer = styled.div`
  grid-area: footer;
  color: white;
  background-color: #15386f;
  text-align: left;
  padding-left: 3em;

  a {
    color: #f1f1f1;

    &:hover {
      color: #c97e0d;
    }
  }
`;

export default Footer;
