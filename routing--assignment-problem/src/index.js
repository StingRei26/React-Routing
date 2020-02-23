import React from 'react';
import ReactDOM from 'react-dom';
// #1 BrowserRouter needed to have the Routs in App.js work 
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// #1 wrap app with BrowserRouter
ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
