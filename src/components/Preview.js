import React from 'react';

const Preview = (contest) => (
    <p className="Preview">
        <b>{contest.categoryName}</b>
        <em>{contest.contestName}</em>
    </p>
    );

export default Preview;