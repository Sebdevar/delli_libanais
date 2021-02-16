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
  /* background-color: #008500; */
  background-image: linear-gradient(30deg,
    #004497,
    #1382aa
  );
`;

const Score = styled.div`
  color: white;
  font-size: 2.5em;
  text-shadow: 5px 5px 5px rgba(0,0,0,.4);

`;

const StarRating = styled.div`
  display: block;
  position: relative;
  color: rgba(197, 197, 197, .6);
  text-shadow: 5px 5px 5px rgba(0,0,0,.4);
  font-size: 2em;
  grid-area: score;

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
  color: white;
  text-shadow: 5px 5px 5px rgba(0,0,0,.4);
`;
