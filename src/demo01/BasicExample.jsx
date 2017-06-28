import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Topics from './Topics';

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Index</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="topics">Topic</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
)

export default BasicExample;
