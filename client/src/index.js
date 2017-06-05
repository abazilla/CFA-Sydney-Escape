import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import insertCss from 'insert-css';
import css from '../node_modules/re-bulma/build/css.js';
try {
  if (typeof document !== 'undefined' || document !== null) insertCss(css, { prepend: true });
} catch (e) {}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
