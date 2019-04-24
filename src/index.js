import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bookshelf from './components/bookshelf1.js'
import Home from './components/home';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from 'react-router-dom';
import info from '../src/components/bookInfo';

ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
