import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GoogleInfosProvider from './contexts/googleInfos.context';

ReactDOM.render(
  <React.StrictMode>
    <GoogleInfosProvider>
      <App />
    </GoogleInfosProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
