import React from "react";

const BtnExit = ({ dispatch }) => {
  return (
    <button
      type="button"
      className="btn btn-link"
      onClick={() => {
        dispatch({ type: "SET_USER", payload: "" });
        dispatch({ type: "SET_CURRENTGAME", payload: {} });
        dispatch({ type: "SET_GAMES", payload: {} });
      }}
    >
      Exit
    </button>
  );
};

export default BtnExit;
