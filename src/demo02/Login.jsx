import React, { Component } from 'react';
import * as fakeAuth from './fakeAuth';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        fakeAuth.authenticate(() => this.setState({ redirectToReferrer: true }))
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const {redirectToReferrer} = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from}></Redirect>
            )
        }

        return (
            <div>
                <p>if want visit { from.pathname }, you need to login.</p>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;
