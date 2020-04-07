import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import BtnScoresTable from "./btnScoresTable";
import BtnAllGames from "./btnAllGames";
import Score from "./score";
import BtnExit from "./btnExit";

const Header = ({ state, dispatch }) => {
  return (
    <header
      className="sticky-top bg-light mb-5"
      style={{
        boxShadow:
          "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2)",
        WebkitBoxShadow:
          "0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2)",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          <svg
            className="text-danger"
            viewBox="0 0 512 512"
            style={{ width: "2rem", fill: "currentColor" }}
          >
            <path d="M416 64v128h-64v-64h-128v256h64v64h-192v-64h64v-320h256z"></path>
          </svg>
          <span className="text-danger">Hang</span>
          <span className="text-warning">man</span>
        </span>
        {state.user && (
          <>
            <button
              className="navbar-toggler"
              id="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav mr-auto">
                {/* scores tables */}
                <BtnScoresTable state={state} dispatch={dispatch} />
                {/* All Games */}
                <BtnAllGames state={state} dispatch={dispatch} />
                {/* Exit buttom */}
                <BtnExit dispatch={dispatch} />
              </div>

              <div className="navbar-nav">
                <h4 className="text-center mx-3">{state.user}</h4>
                {/* Score button */}
                <Score state={state} dispatch={dispatch} />
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
