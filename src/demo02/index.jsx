import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Public from './Public';
import Login from './Login';
import Protected from './Protected';
import AuthButton from './AuthButton';
import PrivateRoute from './PrivateRoute';

function AuthExample () {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li><Link to="/public">Public page</Link></li>
                    <li><Link to="protected">Protected page</Link></li>
                </ul>

                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    )
}

export default AuthExample;
