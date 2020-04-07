import React from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import Keyboard from "./keyboard/keyboard";
import Playboard from "./playboard/playboard";
import SignIn from "./signin/signin";
import NewGame from "./newGame/newGame";

const Main = ({ state, dispatch }) => {
  const _currentClick = async () => {
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

        console.log(result);

        dispatch({ type: "SET_CURRENTGAME", payload: result });

        // toast(`Game created sucessfully.`);
      }

      if (response.status >= 400) {
        toast("Ooops!, something went wrong.");
      }
    } catch (error) {
      toast("Something went wrong check you network.");
    }
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
                    onClick={() => {
                      _currentClick();
                    }}
                  >
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
