import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Price from './price.component';

const Item = (props) => {
  const { name, price } = props;

  return (
    <StyledItem>
      <Name>
        {name}
      </Name>
      {price ? (
        <Price price={price} />
      ) : (<></>)}
    </StyledItem>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const Name = styled.div`
  font-family: 'Cinzel Decorative', cursive;
  font-weight: bold;
  text-align: left;
  ::first-letter {
    font-size: 130%;
  }
`;

const StyledItem = styled.div`
  display: grid;
  padding-left: 10px;
  padding-right: 10px;
  width: 1fr;
  grid-template-columns: auto auto;
  align-items:center;

  color: white;
  background-color: rgba(0, 0, 0, 0.25);
`;

export default Item;
