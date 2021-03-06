import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Price from './price.component';

const Item = (props) => {
  const { name, price1, price2 } = props;

  return (
    <StyledItem>
      <Name>
        {name}
      </Name>
      <Seul>
        {price1 && (<Price price={price1} />)}
      </Seul>
      <Trio>
        {price2 && (<Price price={price2} />)}
      </Trio>
    </StyledItem>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price1: PropTypes.string.isRequired,
  price2: PropTypes.string.isRequired,
};

const Trio = styled.div`
  text-align: right;
  grid-area: trio;
`;

const Seul = styled.div`
  text-align: right;
  grid-area: seul;
`;

const Name = styled.div`
  font-family: 'Cinzel Decorative', cursive;
  text-align: left;
  font-weight: bold;
  grid-area: name;

  ::first-letter {
    font-size: 130%;
  }
`;

const StyledItem = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  padding-left: 10px;
  padding-right: 10px;
  width: 1fr;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  grid-template-areas: "name name seul trio";
  color: white;
  background-color: rgba(0, 0, 0, 0.25);

  @media only screen and (max-device-width: 480px) {
    margin-bottom: 5px;
    font-size: 10pt;
  }
`;

export default Item;
