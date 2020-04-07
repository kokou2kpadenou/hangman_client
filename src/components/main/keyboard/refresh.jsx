import React from "react";
import { toast } from "react-toastify";

const Refresh = ({ state, dispatch }) => {
  const _refreshClick = async () => {
    //
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

      if (response.status === 200) {
        const result = await response.json();
        console.log(result);

        dispatch({ type: "SET_CURRENTGAME", payload: result });
      }

      if (response.status === 410) {
        toast("Ooops!, something went wrong.");
      }

      if (response.status === 500) {
        toast("Ooops!, something went wrong.");
      }
    } catch (error) {
      toast("Something went wrong check you network.");
    }
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
