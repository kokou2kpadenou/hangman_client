import React, { useState } from "react";
import { toast } from "react-toastify";

const SignIn = ({ dispatch }) => {
  const [name, setName] = useState("");

  const _click = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ user: name }),
      });

      const result = await response.json();

      dispatch({ type: "SET_USER", payload: result.user });
      dispatch({ type: "SET_SCORE", payload: result.score });
    } catch (error) {
      console.log(error);

      // toast(error.TypeError);
    }
  };

  return (
    <>
      <div className="input-group mb-3 mt-5">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Username
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block mb-5"
        disabled={!name}
        onClick={() => _click()}
      >
        Sign In
      </button>
    </>
  );
};

export default SignIn;
