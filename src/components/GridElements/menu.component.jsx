import React from 'react';
import styled from 'styled-components';

import Assiettes from '../Menu/assiettes.component';
import Sandwitchs from '../Menu/sandwichs.component';
import Baklawas from '../Menu/baklawas.component';
import Boissons from '../Menu/boissons.component';

const MenuComponent = () => (
  <StyledMenu>
    <Assiettes />
    <Sandwitchs />
    <Baklawas />
    <Boissons />
  </StyledMenu>
);

const StyledMenu = styled.div`
  display: grid;
  padding: 10px;
  color: white;
  background-image:
    linear-gradient(
      -30deg,
      #002e66,
      #1382aa
    );
  grid-area: menu;
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
`;

export default MenuComponent;
