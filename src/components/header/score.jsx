import React from "react";
import { toast } from "react-toastify";

const Score = ({ state, dispatch }) => {
  const _click = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/${state.user}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      );

      if (response.status === 200) {
        const result = await response.json();

        dispatch({ type: "SET_SCORE", payload: result.score });
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
      className="btn btn-primary"
      style={{ fontSize: "0.8rem" }}
      onClick={() => {
        _click();
      }}
    >
      Score <span className="badge badge-light">{state.score}</span>
    </button>
  );
};

export default Score;
