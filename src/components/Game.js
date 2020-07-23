import React, { useState, useEffect } from 'react';

import utils from '../math-utils'
import MemoryBoard from './MemoryBoard';
import PlayAgain from './PlayAgain';

const randomArray = (utils.range(1, 12));
const shuffled = randomArray.sort(() => 0.5 - Math.random());

const Game = () => {
    const [secondsLeft, setSecondsLeft] = useState(5);
    const gameStatus = secondsLeft === 0 ? 'lost' : 'active';

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
            {gameStatus === 'active' ? (
                <MemoryBoard array={shuffled} secondsLeft={secondsLeft} />
            ) : (
                    <PlayAgain gameStatus={gameStatus} />
                )}
        </div>
    );
};

export default Game;