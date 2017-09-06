import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App'
import BaseLayout from './components/Layout'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import ShowPost from './components/ShowPost'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
