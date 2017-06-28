import React from 'react';

export default function(props) {
    const { match } = props;

    console.log(props);

    return (
        <div>
            <h3>{match.params.topidId}</h3>
        </div>
    )
}
