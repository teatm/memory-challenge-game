import React, { useState, useEffect } from 'react';

import utils from '../math-utils'
import MemoryBoard from './MemoryBoard';
import MemoryCard from './MemoryCard';
import PlayAgain from './PlayAgain';

const length = 24;
const randomArray = utils.range(1, length);
const shuffled = randomArray.sort(() => 0.5 - Math.random());

const Game = (props) => {
    const [secondsLeft, setSecondsLeft] = useState(5);
    const [availableNums, setAvailableNums] = useState(utils.range(1, length));
    const [checkingNums, setCheckingNums] = useState([]);
    const [matchedNums, setMatchedNums] = useState([]);
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

    const numberStatus = (number) => {
        if (gameStatus === 'inactive')
            return 'inactive';

        if (checkingNums.includes(number)) {
            return 'checking';
        }

        if (availableNums.includes(number)) {
            return 'available';
        }

        return 'used';
    };

    const onNumberClick = (number, currentStatus) => {
        if (currentStatus === 'used' || gameStatus === 'inactive') {
            return;
        }

        if (currentStatus === 'checking') {
            const newAvailableNums = availableNums.concat(number);
            setCheckingNums(newAvailableNums);
        }

        if (currentStatus === 'available') {
            const newCheckingNums = checkingNums.concat(number);
            setCheckingNums(newCheckingNums);
        }
    };

    return (
        <div className="right">
            {gameStatus !== 'lost' ? (
                <div>
                    {shuffled.map((number) => (
                        <MemoryCard
                            key={number}
                            number={number}
                            status={numberStatus(number)}
                            onClick={onNumberClick}
                        />
                    ))}
                    <div className="timer">Time Remaining: {secondsLeft}</div>
                </div>
            ) : (
                    <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
                )}
        </div>
    );
};

export default Game;