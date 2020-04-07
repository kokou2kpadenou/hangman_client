import React from "react";

const Playboard = ({ state }) => {
  const { gamePlayboard, numberOfGuesses, guesses } = state.currentGame;

  const failedGuesses = guesses.filter((elt) => !elt.guessingCorrect).length;
  const guessesPercentage = (failedGuesses / numberOfGuesses) * 100;

  return (
    <>
      <div className="bg-light  my-5">
        <div className="d-flex flex-wrap justify-content-center pt-5 pb-3">
          {gamePlayboard.map((elt, i) => (
            <button
              key={i}
              className="btn btn-secondary btn-sm d-inline-block m-2"
              style={{ width: "28px", height: "35px", cursor: "default" }}
            >
              {elt}
            </button>
          ))}
        </div>
        <div className="alert alert-secondary text-center" role="alert">
          {!(state.user === state.currentGame.gameOwner) &&
            state.currentGame.gameStatus === "active" && (
              <span>Now playing ...</span>
            )}

          {state.user === state.currentGame.gameOwner &&
            state.currentGame.gameStatus === "active" && (
              <span>You can not play your own game, wait for next game.</span>
            )}

          {state.currentGame.gameStatus === "game over" && (
            <span>
              This game is over and the winner is{" "}
              <span className="text-danger">{state.currentGame.winner}</span>,
              please click Next Game button.
            </span>
          )}

          {state.currentGame.gameStatus === "canceled" && (
            <span>This game is canceled, please click Next Game button.</span>
          )}
        </div>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-danger"
            role="progressbar"
            style={{ width: `${guessesPercentage}%` }}
            aria-valuenow={guessesPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {`${guessesPercentage}%`}
          </div>
        </div>
      </div>
    </>
  );
};

export default Playboard;
