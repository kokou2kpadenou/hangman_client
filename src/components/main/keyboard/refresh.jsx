import React from "react";
import { toast } from "react-toastify";

const Refresh = ({ state, dispatch, setSpinner }) => {
  const _refreshClick = async () => {
    //
    setSpinner(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/game/by/${state.currentGame._id}`,
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

      if (response.status >= 400 && response.status < 500) {
        toast(result.errmsg);
      }

      if (response.status >= 500) {
        toast("Ooops!, something went wrong.");
      }
    } catch (error) {
      toast("Something went wrong, check your network.");
    }
    setSpinner(false);
  };
  return (
    <button
      key="refresh"
      className="btn btn-primary btn-sm m-3"
      onClick={() => {
        _refreshClick();
      }}
    >
      Refresh
    </button>
  );
};

export default Refresh;
