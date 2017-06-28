import React from 'react';
import { Route, Link } from 'react-router-dom';
import Topic from './Topic';

const Topics = props => {
    const { match } = props;

    return (
        <div>
            <h2>Topic list</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>use react render.</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>props v. state</Link>
                </li>
            </ul>

            <Route path={`${match.url}/:topidId`} component={Topic} />
            <Route exact path={match.url} render={() => <h3>Please select a topic</h3>} />
        </div>
    )
}

export default Topics;
