import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import App from '../containers/heroapp.js';	
import configureStore from '../stores/heroStrore.js';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import HeroProfile from '../components/HeroProfile.js';

const store = configureStore();


ReactDOM.render(
	<Provider store={store}>
	  <App />
  </Provider>,
  document.getElementById('root')
);
