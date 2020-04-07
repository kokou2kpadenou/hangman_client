import React from "react";
import { toast } from "react-toastify";

const BtnAllGames = ({ state, dispatch }) => {
  const _click = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/games/${state.user}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );

      if (response.status === 200) {
        const result = await response.json();

        dispatch({ type: "SET_GAMES", payload: result });
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
      type="button"
      className="btn btn-link"
      data-toggle="modal"
      data-target="#allgames"
      onClick={() => {
        _click();
      }}
    >
      All games
    </button>
  );
};

export default BtnAllGames;
