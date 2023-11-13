import React from 'react';

function GuessInput({ addToGuessList, gameStatus }) {
  const [guess, setGuess] = React.useState('');
  const handleChange = (event) => {
    if (event.target.value.length > 5) return;
    const newGuess = event.target.value.toUpperCase();
    setGuess(newGuess);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length === 0) return;
    addToGuessList(guess);
    setGuess('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        onChange={handleChange}
        title="Please enter 5 letters"
        disabled={gameStatus.status !== 'playing'}
      />
    </form>
  );
}

export default GuessInput;
