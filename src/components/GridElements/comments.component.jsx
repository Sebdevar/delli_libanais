import React, { useMemo, useReducer } from 'react';
import styled from 'styled-components';
import { useGoogleInfos } from '../../contexts/googleInfos.context';
import CommentsReducer, { useActions } from './comments.reducer';

const initialState = {
  reviews: [],
  initialX: null,
  currentX: null,
  offsetX: 0,
};

const CommentsCarousel = () => {
  const googleInfos = useGoogleInfos();
  const [state, dispatch] = useReducer(
    CommentsReducer,
    {
      ...initialState,
      reviews: googleInfos.reviews.concat(googleInfos.reviews),
    },
  );
  const actions = useActions(dispatch);

  const carouselContent = useMemo(() => state.reviews.map((review) => (
    <CommentBox>
      <Text>{review.text}</Text>
      <Rating>{'★'.repeat(review.rating)}</Rating>
    </CommentBox>
  )), [state.reviews]);

  const startSwipe = (event) => {
    event.preventDefault();
    actions.startSwipe(event);
  };

  const updateCursorPosition = (event) => {
    if (state.initialX !== null) {
      actions.move(event);
    }
  };

  const endSwipe = (event) => {
    event.preventDefault();
    if (state.offsetX > 375) {
      actions.previousReview();
    }
    if (state.offsetX < -375) {
      actions.nextReview();
    }
    actions.endSwipe(event);
  };

  return (
    <CarouselContainer
      onMouseDown={startSwipe}
      onMouseMove={updateCursorPosition}
      onMouseUp={endSwipe}
      onMouseLeave={endSwipe}
      onTouchStart={startSwipe}
      onTouchMove={updateCursorPosition}
      onTouchEnd={endSwipe}
      onTouchCancel={endSwipe}
    >
      <CarouselContent offset={state.offsetX} itemcount={state.reviews.length}>
        {carouselContent}
      </CarouselContent>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 16px;
`;

const CarouselContent = styled.div.attrs((props) => ({
  style: {
    left: `${(props.offset / 16) - (props.itemcount * 22.5) + 22.5}em`,
  },
}))`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  height: 100%;
`;

const CommentBox = styled.div`
  min-width: 29em;
  padding: 0.5em;
  margin-right: 15em;
  border-radius: 0.5em;
  background-color: beige;
`;

const Text = styled.div`
  white-space: pre-wrap;
`;

const Rating = styled.div`
  color: gold;
  font-size: 2em;
  text-shadow: 0 1px 0 #ab5414;
`;

export default CommentsCarousel;
