import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home'
import App from './modules/App'

import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                {/* make them children of `App` */}
                <Route path="/repos" component={Repos} />
                <Route path="/about" component={About} />
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'))
