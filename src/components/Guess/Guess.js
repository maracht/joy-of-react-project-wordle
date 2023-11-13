import React from 'react';
import { range } from '../../utils';
import clsx from 'clsx';

function Guess({ word }) {
  const renderEmptyCell = () => {
    return range(5).map((i) => <span key={i} className="cell"></span>);
  };

  const renderWord = () => {
    return word.map(({ letter, status }, i) => (
      <span key={i} className={clsx('cell', status)}>
        {letter}
      </span>
    ));
  };

  return <p className="guess">{word.length === 5 ? renderWord() : renderEmptyCell()}</p>;
}

export default Guess;
