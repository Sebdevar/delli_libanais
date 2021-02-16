import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <a href="https://github.com/Sebdevar">Sébastien De Varennes</a>
    {' & '}
    <a href="https://github.com/kikiwako">Vincent Girard</a>
    {' © 2021'}
  </FooterContainer>
);

const FooterContainer = styled.div`
  display: flex;
  grid-area: footer;
  color: white;
  background-color: #15386f;
  height: 100px;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  background-image:
    linear-gradient(
      to right,
      #15386f,
      #154694,
      #15386f
    );

  a {
    color: #f1f1f1;

    &:hover {
      color: #c97e0d;
    }
  }
`;

export default Footer;
