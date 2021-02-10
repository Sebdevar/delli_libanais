import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GooglePlacesProvider from './contexts/GooglePlaces.context';

ReactDOM.render(
  <React.StrictMode>
    <GooglePlacesProvider>
      <App />
    </GooglePlacesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
