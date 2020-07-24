import React, { useState, useEffect } from 'react';

import utils from '../math-utils'
import MemoryBoard from './MemoryBoard';
import PlayAgain from './PlayAgain';

const length = 24;
const randomArray = utils.range(1, length);
const shuffled = randomArray.sort(() => 0.5 - Math.random());

const Game = (props) => {
    const [secondsLeft, setSecondsLeft] = useState(5);
    const gameStatus = timesLeft === 0 ? 'lost' : secondsLeft === 0 ? 'active' : 'inactive';
    const timesLeft = 5;

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
            {gameStatus !== 'lost' ? (
                <MemoryBoard array={shuffled} secondsLeft={secondsLeft} gameStatus={gameStatus} />
            ) : (
                    <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
                )}
        </div>
    );
};

export default Game;