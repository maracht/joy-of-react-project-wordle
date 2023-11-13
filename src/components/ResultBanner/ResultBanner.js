import React from 'react';
import clsx from 'clsx';

function ResultBanner({ gameStatus: { status, guesses }, answer }) {
  const bannerClass = {
    won: 'happy',
    lost: 'sad',
  };
  return (
    console.info({ status, guesses, answer }),
    (
      <div className={clsx('banner', bannerClass[status])}>
        {status === 'won' && (
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses} guesses</strong>.
          </p>
        )}
        {status === 'lost' && (
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        )}
      </div>
    )
  );
}

export default ResultBanner;
