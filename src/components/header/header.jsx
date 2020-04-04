import React from "react";

const Header = ({ state, dispatch }) => {
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

      const result = await response.json();

      dispatch({ type: "SET_SCORE", payload: result.score });
    } catch (error) {
      console.log(error);

      // toast(error.TypeError);
    }
  };

  return (
    <header className="bg-light p-4 mb-5">
      <h1 className="main-tittle text-center">
        {/* <svg
          className="text-primary"
          viewBox="0 0 512 512"
          style={{ width: "3rem", fill: "currentColor" }}
        >
          <path d="M416 64v128h-64v-64h-128v256h64v64h-192v-64h64v-320h256z"></path>
        </svg> */}
        <span className="d-block">
          <span className="text-danger">Hang</span>
          <span className="text-warning">man</span>
        </span>
      </h1>
      {state.user && (
        <div className="d-flex justify-content-center align-items-center">
          <h3 className="px-4">{state.user}</h3>

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

          <button
            type="button"
            className="btn btn-light px-3 mx-2"
            onClick={() => dispatch({ type: "SET_USER", payload: "" })}
          >
            Exit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
