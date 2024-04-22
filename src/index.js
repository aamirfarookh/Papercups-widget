import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Widget from './components/Widget';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Widget/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
