import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as fakeAuth from './fakeAuth';

function PrivateRoute (props) {
    const isAuthenticated = fakeAuth.getAuthenticate();
    const { component: Component, ...rest } = props;

    return (
        <Route {...rest} render={props => (
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        )} />
    )
}

export default PrivateRoute;
