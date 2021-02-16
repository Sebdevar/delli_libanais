import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import assietteMixte from '../../images/Food/assietteMixte.webp';
import baklawa from '../../images/Food/baklawa.webp';
import brochetteCombo from '../../images/Food/brochetteCombo.webp';
import brochettePoulet from '../../images/Food/brochetteDePoulet.webp';
import crevettes from '../../images/Food/crevettes.webp';
import filetSole from '../../images/Food/filetDeSole.webp';
import heroShot from '../../images/Food/heroShot.webp';
import kefka from '../../images/Food/keftka.webp';
import pitaShishTaouk from '../../images/Food/pitaShihTaouk.webp';
import quatreSalades from '../../images/Food/quatreSalades.webp';
import saladeTaouk from '../../images/Food/saladeTaouk.webp';
import shawarma from '../../images/Food/shawarma.webp';
import shishTaouk from '../../images/Food/shishTaouk.webp';

const images = [
  assietteMixte,
  baklawa,
  brochetteCombo,
  brochettePoulet,
  crevettes,
  filetSole,
  heroShot,
  kefka,
  pitaShishTaouk,
  quatreSalades,
  saladeTaouk,
  shawarma,
  shishTaouk,
];

const Food = (props) => {
  const { number } = props;

  return (
    <StyledFood key={number}>
      <StyledImage src={images[number]} />
    </StyledFood>
  );
};

const StyledImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  height: 240px;
  width: 240px;
`;

const StyledFood = styled.div`
  width: 240px;
`;

Food.propTypes = {
  number: PropTypes.string.isRequired,
};

export default Food;
