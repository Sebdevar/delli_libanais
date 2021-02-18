import React from 'react';
import styled from 'styled-components';

import bannerImage from '../../images/Banner.webp';

const Banner = () => (
  <StyledBanner>
    <StyledImage src={bannerImage} alt="Bannière" />
    <Text>
      1170 Boulevard Lebourgneuf, Québec, QC G2K 2E3
    </Text>
  </StyledBanner>
);

const Text = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, -110%);
  text-shadow: 4px 4px 3.5px rgba(0, 0, 0, 0.3);
  font-family: 'Lateef', cursive;
  font-size: 25pt;

  @media only screen and (max-device-width: 480px) {
    font-size: 15pt;
    transform: translate(-50%, 0);
    text-shadow: 3px 3px 3.5px rgba(0, 0, 0, 0.25);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const StyledBanner = styled.div`
  grid-area: banner;
  color: white;
  font-weight: bold;
`;
export default Banner;
