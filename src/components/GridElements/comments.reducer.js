const actionTypes = {
  NEXT_REVIEW: 1,
  PREVIOUS_REVIEW: 2,
  START_SWIPE: 3,
  MOVE: 4,
  END_SWIPE: 5,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEXT_REVIEW: {
      const reviews = [...state.reviews];
      reviews.push(reviews.shift());
      return {
        ...state,
        reviews,
      };
    }
    case actionTypes.PREVIOUS_REVIEW: {
      const reviews = [...state.reviews];
      reviews.unshift(reviews.pop());
      return {
        ...state,
        reviews,
      };
    }
    case actionTypes.START_SWIPE: {
      return {
        ...state,
        initialX: action.payload,
        currentX: action.payload,
      };
    }
    case actionTypes.MOVE: {
      return {
        ...state,
        currentX: action.payload,
        offsetX: action.payload - state.initialX,
      };
    }
    case actionTypes.END_SWIPE:
      return {
        ...state,
        initialX: null,
        currentX: null,
        offsetX: 0,
      };
    default:
      return state;
  }
};

export const useActions = (dispatch) => ({
  nextReview: () => dispatch({ type: actionTypes.NEXT_REVIEW }),
  previousReview: () => dispatch({ type: actionTypes.PREVIOUS_REVIEW }),
  startSwipe: (event) => {
    let x;
    if (event.type.startsWith('mouse')) {
      x = event.pageX;
    } else if (event.type.startsWith('touch')) {
      x = event.touches[0].pageX;
    }
    return dispatch({
      type: actionTypes.START_SWIPE,
      payload: x,
    });
  },
  move: (event) => {
    let x;
    if (event.type.startsWith('mouse')) {
      x = event.pageX;
    } else if (event.type.startsWith('touch')) {
      x = event.touches[0].pageX;
    }
    return dispatch({
      type: actionTypes.MOVE,
      payload: x,
    });
  },
  endSwipe: () => dispatch({ type: actionTypes.END_SWIPE }),
});

export default Reducer;
