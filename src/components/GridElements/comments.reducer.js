const actionTypes = {
  NEXT_REVIEW: 1,
  PREVIOUS_REVIEW: 2,
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
    default:
      return state;
  }
};

export const useActions = (dispatch) => ({
  nextReview: () => dispatch({ type: actionTypes.NEXT_REVIEW }),
  previousReview: () => dispatch({ type: actionTypes.PREVIOUS_REVIEW }),
});

export default Reducer;
