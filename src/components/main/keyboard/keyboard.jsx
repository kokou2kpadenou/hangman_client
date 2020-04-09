import React, { useState } from "react";
import Cancel from "./cancel";
import Refresh from "./refresh";
import NextGame from "./nextGame";
import Letters from "./letters";
import KeyboardSpinner from "./keyboardSpinner";

const Keyboard = ({ state, dispatch }) => {
  //
  const [spinner, setSpinner] = useState(false);

  return (
    <div className="d-flex flex-wrap justify-content-center my-3 position-relative">
      {spinner && <KeyboardSpinner />}
      <Letters state={state} dispatch={dispatch} setSpinner={setSpinner} />
      <Refresh state={state} dispatch={dispatch} setSpinner={setSpinner} />
      <Cancel state={state} dispatch={dispatch} setSpinner={setSpinner} />
      <NextGame state={state} dispatch={dispatch} setSpinner={setSpinner} />
    </div>
  );
};

export default Keyboard;
