import React from 'react';
import styled from 'styled-components';

import bannerImage from '../images/Banner.webp';

const Banner = () => (
  <StyledBanner>
    <StyledImage src={bannerImage} alt="Banière" />
    1170 Boulevard Lebourgneuf, Québec, QC G2K 2E3
  </StyledBanner>
);

const StyledImage = styled.img`
  width: 90%;
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
