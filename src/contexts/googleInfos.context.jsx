import React, {
  useState, createContext, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';

const GoogleInfosContext = createContext(undefined);

const initialState = {
  rating: 4.6,
  reviews: [
    {
      author_name: 'Claudia Houle',
      author_url: 'https://www.google.com/maps/contrib/102685305758581864143/reviews',
      profile_photo_url: 'https://lh3.googleusercontent.com/-uXt2rJK7XNs/AAAAAAAAAAI/AAAAAAAAAZY/AMZuuclKuv2HtJcDHS52YpPaW9g9SK0_8w/s128-c0x00000000-cc-rp-mo/photo.jpg',
      rating: 5,
      text: 'J’y suis allée avec mon copain et tout était incroyable! Le service était impeccable, les employés étaient sympathiques et chaleureux, et la nourriture était exquise! Nous y retournerons c’est certain!',
    },
    {
      author_name: 'De Varennes Patrick',
      author_url: 'https://www.google.com/maps/contrib/101188473427315595430/reviews',
      profile_photo_url: 'https://lh4.googleusercontent.com/-XVM---UOMAQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnDbJFHSXWMUa3ZHVA0yfkueuhgcw/s128-c0x00000000-cc-rp-mo-ba5/photo.jpg',
      rating: 5,
      text: "Excellent service, personnel chaleureux, courtois, souriants, heureux, tout simplement incroyable. Tout le menu est succulent et les prix plus qu'abordable. Vous ne serez pas déçus. Wow",
    },
    {
      author_name: 'Jean-François Brouillette',
      author_url: 'https://www.google.com/maps/contrib/118085734540375660994/reviews',
      profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GjLuLJjtifXnNlS-IsWhF0dAA22yKG-6YJXKoCYCCk=s128-c0x00000000-cc-rp-mo-ba4',
      rating: 4,
      text: "Excellent service, la nourriture est très bonne! La quantité pourrait être mieux mais c'est le seul point. Très bon petit restaurant de quartier!",
    },
    {
      author_name: 'hugoasselin1',
      author_url: 'https://www.google.com/maps/contrib/113858962123525289859/reviews',
      profile_photo_url: 'https://lh3.googleusercontent.com/a-/AOh14GgzU61gr_RvPfXcBg7iBWwdu-BWAQ8X5HHPbAEU=s128-c0x00000000-cc-rp-mo-ba3',
      rating: 5,
      text: 'Sérieux c’est excellent  personnel très sympathique\nJ’y vais à toutes les semaines très rapide\nJe vous le recommande',
    },
    {
      author_name: 'Kathleen Ferland',
      author_url: 'https://www.google.com/maps/contrib/110001179173405657112/reviews',
      profile_photo_url: 'https://lh3.googleusercontent.com/-_ZNB1nPEAB0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclY4llLQxRW8aie5yaYna8QhC3D7g/s128-c0x00000000-cc-rp-mo/photo.jpg',
      rating: 5,
      text: "Vraiment excellent, généreuse portion à date c'est le meilleur que j'ai mangé. En plus c'est très propre. Bravo",
    },
  ],
  reviewsCount: 317,
};

const GoogleInfosProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function fetchGoogleInfos() {
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.REACT_APP_GOOGLE_API_KEY}&place_id=ChIJ37EjUOmXuEwRe9AOxoNNSXA&fields=rating,review,user_ratings_total&language=fr`);
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
    <GoogleInfosContext.Provider value={state}>
      {children}
    </GoogleInfosContext.Provider>
  );
};

GoogleInfosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGoogleInfos = () => useContext(GoogleInfosContext);

export default GoogleInfosProvider;
