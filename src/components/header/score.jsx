import React, { useState } from "react";
import { toast } from "react-toastify";

const Score = ({ state, dispatch }) => {
  const [pss, setPss] = useState(false);

  const _click = async () => {
    setPss(true);
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

      const result = await response.json();

      if (response.status === 200) {
        dispatch({ type: "SET_SCORE", payload: result.score });
      }

      if (response.status >= 400) {
        toast("Ooops!, something went wrong.");
      }
    } catch (error) {
      toast("Something went wrong, check your network.");
    }
    setPss(false);
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      style={{ fontSize: "0.8rem" }}
      disabled={pss}
      onClick={() => {
        _click();
      }}
    >
      {pss && (
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      Score <span className="badge badge-light">{state.score}</span>
    </button>
  );
};

export default Score;
