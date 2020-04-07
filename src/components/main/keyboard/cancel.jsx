import React from "react";
import { toast } from "react-toastify";

const Cancel = ({ state, dispatch }) => {
  const _CancelClick = async () => {
    //
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/game/cancel`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            user: state.user,
            gameID: state.currentGame._id,
          }),
        }
      );
      const result = await response.json();

      if (response.status === 200) {
        dispatch({ type: "SET_CURRENTGAME", payload: result });

        toast(`Game canceled sucessfully.`);
      }

      if (response.status >= 400 && response.status < 500) {
        toast(result.errmsg);
      }

      if (response.status >= 500) {
        toast("Ooops!, something went wrong.");
      }
    } catch (error) {
      toast("Something went wrong check you network.");
    }
  };
  return (
    <button
      key="cancel"
      className="btn btn-danger btn-sm m-3"
      disabled={
        !(
          state.user === state.currentGame.gameOwner &&
          state.currentGame.gameStatus === "active"
        )
      }
      onClick={() => {
        _CancelClick();
      }}
    >
      Cancel
    </button>
  );
};

export default Cancel;
