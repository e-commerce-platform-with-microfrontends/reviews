import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (window.createMfeContainerInLayout) {
  window.createMfeContainerInLayout('review-root');
}

ReactDOM.render(
  <App />,
  document.querySelector('#review-root')
);
