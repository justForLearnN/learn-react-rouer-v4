import React from 'react';
import { withRouter } from 'react-router-dom';
import * as fakeAuth from './fakeAuth';

function AuthButton (props) {
    const { history } = props;
    const isAuthenticated = fakeAuth.getAuthenticate();

    return (
        isAuthenticated ? (
            <p>
                welcome! <button onClick={() => fakeAuth.signout(() => history.push('/'))}>Sign out</button>
            </p>
        ) : (
            <p>Please Login.</p>
        )
    )
}

export default withRouter(AuthButton);
