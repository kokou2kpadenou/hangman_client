import React, { useState } from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import Keyboard from "./keyboard/keyboard";
import Playboard from "./playboard/playboard";
import SignIn from "./signin/signin";
import NewGame from "./newGame/newGame";

const Main = ({ state, dispatch }) => {
  const [pss, setPss] = useState(false);

  const _currentClick = async () => {
    setPss(true);
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

      const result = await response.json();

      if (response.status === 200) {
        dispatch({ type: "SET_CURRENTGAME", payload: result });
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
    <main className="container">
      {!state.user && <SignIn dispatch={dispatch} />}
      {state.user && (
        <>
          <NewGame user={state.user} dispatch={dispatch} />
          {/* when there is no current game */}
          {!_.isEmpty(state.currentGame) && (
            <>
              <Playboard state={state} />
              <Keyboard
                state={state}
                keyboard={state.keyboard}
                dispatch={dispatch}
              />
            </>
          )}
          {_.isEmpty(state.currentGame) && (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "400px" }}
            >
              <div>
                <div className="text-center mb-3">No current Game</div>
                <div>
                  <button
                    type="button"
                    className="btn btn-warning"
                    disabled={pss}
                    onClick={() => {
                      _currentClick();
                    }}
                  >
                    {pss && (
                      <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    )}
                    Get Current Game
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Main;
