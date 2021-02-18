import React, {
  useEffect, useMemo, useReducer, useState,
} from 'react';
import styled from 'styled-components';
import { useGoogleInfos } from '../../contexts/googleInfos.context';
import CommentsReducer, { useActions } from './comments.reducer';

const initialState = {
  reviews: [],
};

const CommentsCarousel = () => {
  const googleInfos = useGoogleInfos();
  const [state, dispatch] = useReducer(
    CommentsReducer,
    {
      ...initialState,
      reviews: googleInfos.reviews,
    },
  );
  const actions = useActions(dispatch);
  const [animation, setAnimation] = useState('next');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('next');
      actions.nextReview();
    }, 10000);
    return () => clearInterval(interval);
  }, [actions]);

  const carouselContent = useMemo(() => state.reviews.map((review) => (
    <CommentBox key={review.time}>
      <Text>{review.text}</Text>
      <Rating>{'★'.repeat(review.rating)}</Rating>
    </CommentBox>
  )), [state.reviews]);

  const handlePreviousClick = () => {
    setAnimation('previous');
    actions.previousReview();
  };

  const handleNextClick = () => {
    setAnimation('next');
    actions.nextReview();
  };

  return (
    <CarouselContainer>
      <PreviousButton onClick={handlePreviousClick}>
        <LeftArrow />
      </PreviousButton>
      <CarouselContent
        animation={animation}
        key={state.reviews[0].time}
      >
        {carouselContent}
      </CarouselContent>
      <NextButton onClick={handleNextClick}>
        <RightArrow />
      </NextButton>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  grid-area: comments;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 16px;
`;

const PreviousButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 3em;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.25);
  z-index: 1;

  &:hover {
    background-color: rgba(100, 100, 100, 0.5);
    transform: scale(1.25);
    transition: 0.2s all ease-out;
  }

  @media only screen and (max-device-width: 480px) {
    width: 1.8em;
  }
`;

const LeftArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 2em solid transparent;
  border-bottom: 2em solid transparent;
  border-right: 1.5em solid black;

  @media only screen and (max-device-width: 480px) {
    border-right: 1em solid black;
  }
`;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 3em;
  height: 100%;
  background-color: rgba(100, 100, 100, 0.25);
  z-index: 1;

  &:hover {
    background-color: rgba(100, 100, 100, 0.5);
    transform: scale(1.25);
    transition: 0.2s all ease-out;
  }

  @media only screen and (max-device-width: 480px) {
    width: 1.8em;
  }
`;

const RightArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 2em solid transparent;
  border-bottom: 2em solid transparent;
  border-left: 1.5em solid black;

  @media only screen and (max-device-width: 480px) {
    border-left: 1em solid black;
  }
`;

const CarouselContent = styled.div.attrs((props) => ({
  style: {
    animation: `${props.animation} ease-in-out 1.5s`,
  },
}))`
  display: flex;
  left: -67.5em;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  height: 100%;

  @keyframes next {
    from { transform: translateX(28em); }
    to { transform: translateX(none); }
  }

  @keyframes previous {
    from { transform: translateX(-28em); }
    to { transform: translateX(none); }
  }

  @media only screen and (max-device-width: 480px) {
    left: -26em;
  }
`;

const CommentBox = styled.div`
  min-width: 29em;
  padding: 0.5em;
  margin-right: 10em;
  border-radius: 0.5em;
  background-color: beige;

  @media only screen and (max-device-width: 480px) {
    min-width: 17em;
  }
`;

const Text = styled.div`
  white-space: pre-wrap;

  @media only screen and (max-device-width: 480px) {
    font-size: 10pt;
  }
`;

const Rating = styled.div`
  color: gold;
  font-size: 2em;
  text-shadow: 0 1px 0 #ab5414;
`;

export default CommentsCarousel;
