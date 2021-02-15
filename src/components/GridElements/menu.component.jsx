import React from 'react';
import styled from 'styled-components';

import Assiettes from '../Menu/assiettes.component';
import Sandwitchs from '../Menu/sandwitchs.component';
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
  display:grid;
  padding: 10px;
  width: 720px;

color: white;
background-color: #999;
grid-area: menu;
grid-row-start: 3;
grid-row-end: 7;
grid-column-gap: 27px;
grid-row-gap: 5px;

grid-template-columns: 45.5% 45.5%;
grid-auto-rows: min-content;
`;

export default MenuComponent;
