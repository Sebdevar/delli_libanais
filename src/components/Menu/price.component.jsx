import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PriceComponent = (props) => {
  const { price } = props;

  return (
    <StyledPrice>
      {price}
      {' '}
      $
      {' '}
      <Taxes>+tx</Taxes>
    </StyledPrice>
  );
};

const StyledPrice = styled.span`
  font-family: 'Cinzel Decorative', cursive;
  font-weight: bold;
  text-align: right;
  font-size: inherit;

  color: #ffc400;
`;

const Taxes = styled.sup`
  font-family: 'Cinzel Decorative', cursive;
  font-size: 60%;

  color: white;
`;

PriceComponent.propTypes = {
  price: PropTypes.number.isRequired,
};

export default PriceComponent;
