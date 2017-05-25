import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

const css = require('./../sass/app.scss');

render(<App />, document.getElementById('app'));
