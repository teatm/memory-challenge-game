import React, { useState, useEffect } from 'react';

import utils from '../math-utils'
import PlayCard from './PlayCard';

const randomArray = (utils.range(1, 12));
const shuffled = randomArray.sort(() => 0.5 - Math.random());

const Game = () => {
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft > 0) {
            const timerId = setTimeout(
                () => setSecondsLeft((prevSecondsLeft) => prevSecondsLeft - 1),
                1000
            );
            return () => clearTimeout(timerId);
        }
    }, [secondsLeft]);

    return (
        <div className="right">
            {shuffled.map((number) => (
                <PlayCard
                    key={number}
                    number={number}
                    status={number % 3 == 0 ? 'used' : number % 3 == 1 ? 'available' : 'wrong'}
                />
            ))}
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
};

export default Game;