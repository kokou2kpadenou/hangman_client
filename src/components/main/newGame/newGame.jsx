import React, { useState } from "react";
import { toast } from "react-toastify";

const NewGame = ({ user, dispatch }) => {
  const [name, setName] = useState("");
  const [pss, setPss] = useState(false);

  const _click = async () => {
    setPss(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/game`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          gameOwner: user,
          gameWord: name,
          numberOfGuesses: 10,
        }),
      });

      if (response.status === 201) {
        const result = await response.json();

        dispatch({ type: "ADD_GAME", payload: result });

        setName("");

        toast(`Game created sucessfully.`);
      }

      if (response.status >= 400) {
        toast("Ooops!, something went wrong.");
      }
    } catch (error) {
      toast("Something went wrong check you network.");
    }
    setPss(false);
  };

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Game word
          </span>
        </div>
        <input
          value={name}
          type="text"
          className="form-control"
          placeholder="Propose a word ..."
          aria-label="Propose a word ..."
          aria-describedby="basic-addon1"
          onChange={(e) => setName(e.target.value)}
          disabled={pss}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary btn-lg btn-block"
        disabled={!name || pss}
        onClick={() => {
          _click();
        }}
      >
        {pss && (
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
        )}
        Create Game
      </button>
    </>
  );
};

export default NewGame;
