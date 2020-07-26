import React, { useState } from 'react';

const MemoryCard = (props) => {
    return (
        <button
            className="number"
            style={{ backgroundColor: colors[props.status] }}
            onClick={() => props.onClick(props.number, props.status)}
        >

            {(props.status === 'inactive' || props.status === 'checking' || props.status == 'matched') && (
                <div>{props.number > 12 ? props.number - 12 : props.number}</div>
            )}

        </button>
    );

};

// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    matched: 'lightcoral',
    candidate: 'deepskyblue',
};

export default MemoryCard;