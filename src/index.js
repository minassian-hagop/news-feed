import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { Provider } from 'react-redux';
import configureStore from './store';

axios.interceptors.request.use(
  request => {
    request.headers['x-api-key'] = process.env.REACT_APP_API_KEY;
    return request;
  },
  error => {
    return Promise.reject(error);
  }
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore(window.REDUX_INITIAL_DATA)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
