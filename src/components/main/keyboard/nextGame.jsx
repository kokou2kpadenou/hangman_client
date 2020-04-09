import React from "react";
import { toast } from "react-toastify";

const NextGame = ({ state, dispatch, setSpinner }) => {
  const _nextClick = async () => {
    setSpinner(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/game/current`,
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
    } catch (error) {
      toast("Something went wrong, check your network.");
    }
    setSpinner(false);
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
