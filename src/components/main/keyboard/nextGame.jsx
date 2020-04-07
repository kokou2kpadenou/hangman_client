import React from "react";
import { toast } from "react-toastify";

const NextGame = ({ state, dispatch }) => {
  const _nextClick = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/game/current/${state.user}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );

      if (response.status === 200) {
        const result = await response.json();

        dispatch({ type: "SET_CURRENTGAME", payload: result });
      }

      if (response.status >= 400) {
        toast("Ooops!, something went wrong.");
      }
    } catch (error) {
      toast("Something went wrong check you network.");
    }
  };

  return (
    <button
      key="next"
      className="btn btn-warning btn-sm m-3"
      disabled={state.currentGame.gameStatus === "active"}
      onClick={() => {
        _nextClick();
      }}
    >
      Next Game
    </button>
  );
};

export default NextGame;
