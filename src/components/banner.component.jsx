import React from 'react';
import styled from 'styled-components';

import bannerImage from '../images/Banner.webp';

const Banner = () => (
  <StyledBanner>
    <StyledImage src={bannerImage} alt="Banière" />
    <Text>
      1170 Boulevard Lebourgneuf, Québec, QC G2K 2E3
    </Text>
  </StyledBanner>
);

const Text = styled.div`
  position: relative;
  /* top: 50%; */
  left: 50%;
  transform: translate(-50%, -90%);
  text-shadow: 4px 4px 3.5px rgba(0,0,0,0.5);

  font-family: 'Lateef', cursive;
  font-size: 25pt;
`;

const StyledImage = styled.img`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display:block;
`;

const StyledBanner = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;

  color:white;
  font-weight: bold;
`;
export default Banner;
