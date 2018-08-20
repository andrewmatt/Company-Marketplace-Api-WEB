import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
// import './styles/bootstrap.css';
import './styles/font-awesome.css';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);