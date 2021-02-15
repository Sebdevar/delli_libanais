import React from 'react';
import styled from 'styled-components';
import { useGoogleInfos } from '../../contexts/googleInfos.context';

const GoogleScore = () => {
  const googleInfos = useGoogleInfos();

  return (
    <ScoreContainer>
      <Score>{googleInfos.rating}</Score>
      <StarRating percentage={`${(googleInfos.rating / 5) * 100}%`}>★★★★★</StarRating>
      <ReviewCount>
        {googleInfos.reviewsCount}
        {' '}
        avis
      </ReviewCount>
    </ScoreContainer>
  );
};

export default GoogleScore;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-color: #008500;
`;

const Score = styled.div`
  color: white;
  font-size: 2.5em;
`;

const StarRating = styled.div`
  display: block;
  position: relative;
  color: #c5c5c5;
  font-size: 2em;

  &::after {
    display: block;
    color: gold;
    content: '★★★★★';
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    width: ${(props) => props.percentage || '100%'};
    text-shadow: 0 1px 0 #ab5414;
  }
`;

const ReviewCount = styled.div`
  color: black;

`;
