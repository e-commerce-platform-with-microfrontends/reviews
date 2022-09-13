import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

window.mountReviewMfe = (el) => {
  ReactDOM.render(
    <App />,
    el
  )
}
