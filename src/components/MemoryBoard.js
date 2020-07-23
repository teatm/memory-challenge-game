import React from 'react';

import MemoryCard from './MemoryCard';

const MemoryBoard = (props) => {
    return (
        <div>
            {props.array.map((number) => (
                <MemoryCard
                    key={number}
                    number={number}
                    status={number % 3 == 0 ? 'used' : number % 3 == 1 ? 'available' : 'wrong'}
                />
            ))}
            <div className="timer">Time Remaining: {props.secondsLeft}</div>
        </div>
    );
};

export default MemoryBoard;