const css = require('./styles/app.scss');

import appInit from './scripts/app-init';

appInit();

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);