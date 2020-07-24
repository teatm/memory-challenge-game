import React from 'react';

import MemoryCard from './MemoryCard';

const MemoryBoard = (props) => {
    return (
        <div>
            {props.array.map((number) => (
                <MemoryCard
                    key={number}
                    number={number}
                    status={props.gameStatus === 'inactive' ? 'available' : ''}
                    gameStatus={props.gameStatus}
                />
            ))}
            <div className="timer">Time Remaining: {props.secondsLeft}</div>
        </div>
    );
};

export default MemoryBoard;