import React from 'react';

import utils from '../math-utils'
import PlayCard from './PlayCard';

const randomArray = (utils.range(1, 12));

const shuffled = randomArray.sort(() => 0.5 - Math.random());


const Game = () => {
    return (
        <div className="right">
            {shuffled.map((number) => (
                <PlayCard
                    key={number}
                    number={number}
                    status={number % 3 == 0 ? 'used' : number % 3 == 1 ? 'available' : 'wrong'}
                />
            ))}
        </div>
    );
};

export default Game;