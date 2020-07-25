import React, { useState } from 'react';

const MemoryCard = (props) => {
    return (
        <button
            className="number"
            style={{ backgroundColor: colors[props.status] }}
            onClick={() => props.onClick(props.number, props.status)}
        >

            {(props.status === 'inactive' || props.status === 'checking') && (
                <div>{props.number > 12 ? props.number - 12 : props.number}</div>
            )}

        </button>
    );

};

// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

export default MemoryCard;