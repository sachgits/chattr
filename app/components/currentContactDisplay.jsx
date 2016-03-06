import React from 'react';

const CurrentContactDisplay = ({
    name,
    phoneNumber
}) => (
    <div>
        <h3>{name}</h3>
        <p>{phoneNumber}</p>
    </div>
);

export default CurrentContactDisplay;