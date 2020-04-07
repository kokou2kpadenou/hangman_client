import React from "react";
import Cancel from "./cancel";
import Refresh from "./refresh";
import NextGame from "./nextGame";
import Letters from "./letters";

const Keyboard = ({ state, dispatch }) => {
  //

  return (
    <div className="d-flex flex-wrap justify-content-center my-3">
      <Letters state={state} dispatch={dispatch} />
      <Refresh state={state} dispatch={dispatch} />
      <Cancel state={state} dispatch={dispatch} />
      <NextGame state={state} dispatch={dispatch} />
    </div>
  );
};

export default Keyboard;
