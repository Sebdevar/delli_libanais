import React, {
  useState, createContext, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';

const GooglePlacesContext = createContext(undefined);

const initialState = {
  rating: 5,
  reviews: [],
  reviewsCount: 500,
};

const GooglePlacesProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function fetchGoogleInfos() {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.REACT_APP_GOOGLE_API_KEY}&place_id=ChIJ37EjUOmXuEwRe9AOxoNNSXA&fields=rating,review,user_ratings_total&language=fr`);
      if (response.ok) {
        const responseBody = await response.json();
        setState({
          rating: responseBody.result.rating,
          reviews: responseBody.result.reviews,
          reviewsCount: responseBody.result.user_ratings_total,
        });
      }
    }
    fetchGoogleInfos();
  }, []);

  return (
    <GooglePlacesContext.Provider value={state}>
      {children}
    </GooglePlacesContext.Provider>
  );
};

GooglePlacesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGooglePlaces = () => useContext(GooglePlacesContext);

export default GooglePlacesProvider;
