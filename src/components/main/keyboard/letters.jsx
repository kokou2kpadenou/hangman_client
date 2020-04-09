import React from "react";
import { toast } from "react-toastify";

const Letters = ({ state, dispatch, setSpinner }) => {
  const { user, keyboard, currentGame } = state;
  const keyPlayed = currentGame.guesses.map((elt) => elt.letterGuessed);

  const _keyClick = async (e) => {
    //
    setSpinner(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/game/guess`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            guessingPlayer: state.user,
            guessLetter: e.target.value,
            gameID: state.currentGame._id,
          }),
        }
      );
      const result = await response.json();

      if (response.status === 200) {
        dispatch({ type: "SET_CURRENTGAME", payload: result });
      }

      if (response.status >= 400 && response.status < 500) {
        toast(result.errmsg);
      }

      if (response.status >= 500) {
        toast("Ooops!, something went wrong.");
      }
    } catch (error) {
      toast("Something went wrong, check your network.");
    }
    setSpinner(false);
  };

  return keyboard.map((elt) => (
    <button
      key={elt}
      type="button"
      value={elt}
      className="btn btn-primary btn-sm m-3"
      style={{ width: "40px" }}
      onClick={(e) => {
        _keyClick(e);
      }}
      disabled={
        keyPlayed.includes(elt) ||
        user === currentGame.gameOwner ||
        currentGame.gameStatus === "game over" ||
        currentGame.gameStatus === "canceled"
      }
    >
      {elt}
    </button>
  ));
};

export default Letters;
