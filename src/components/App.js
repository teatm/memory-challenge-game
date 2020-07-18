import React, { useState } from 'react';

import utils from '../math-utils'
import PlayCard from './PlayCard'

// const MemoryChallenge = props => {

// };

const randomArray = (utils.range(1, 12));

const array = [1, 2, 3, 4, 5];

const shuffled = randomArray.sort(() => 0.5 - Math.random());


export function App() {
  const [stars, setStars] = useState(utils.random(1, 9));

  return (
    <div>
      <div className="right">
        {randomArray.map((number) => (
          <PlayCard
            number={number}
            status={number % 3 == 0 ? 'used' : number % 3 == 1 ? 'available' : 'wrong'}
          />
        ))}
      </div>
    </div>
  );
}
