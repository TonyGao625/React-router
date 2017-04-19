import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory ,IndexRoute} from 'react-router'
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home'
import App from './modules/App'
render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Home}/>
            {/* make them children of `App` */}
            <Route path="/repos" component={Repos} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
    , document.getElementById('app'))
