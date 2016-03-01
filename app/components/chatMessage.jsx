import React from 'react';

const CharMessage = ({ dateStamp, body }) => (
    <div>
        <div>{body}</div>
        <div>{dateStamp}</div>
    </div> 
);