import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import ResultBanner from '../ResultBanner/ResultBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({ status: 'playing', guesses: 0 });

  const checkGameStatus = (guess) => {
    const newGameStatus = { ...gameStatus };
    newGameStatus.guesses += 1;

    if (guess === answer) {
      newGameStatus.status = 'won';
    } else if (newGameStatus.guesses >= NUM_OF_GUESSES_ALLOWED) {
      newGameStatus.status = 'lost';
    }

    setGameStatus(newGameStatus);
  };

  const addToGuessList = (guess) => {
    const newGuessList = [...guessList];
    newGuessList.push(guess);
    setGuessList(newGuessList);
    checkGameStatus(guess);
  };

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput addToGuessList={addToGuessList} gameStatus={gameStatus} />
      {gameStatus.status !== 'playing' && <ResultBanner gameStatus={gameStatus} answer={answer} />}
    </>
  );
}

export default Game;
