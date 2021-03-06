import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import our SASS file
import './styles/main.scss';

import App from './components/App';

import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
