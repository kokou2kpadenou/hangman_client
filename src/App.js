import React, { useReducer, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import Scores from "./components/scores/scores";
import Modal from "./components/commun/modal/modal";

import { initialState, reducer } from "./reducer";
import Games from "./components/allGames/games";

let localState = JSON.parse(sessionStorage.getItem("state"));

function App() {
  const [state, dispatch] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    sessionStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <div className="App">
      <ToastContainer />
      <Modal title="Scores Table" modalId="scores">
        <Scores state={state} dispatch={dispatch} />
      </Modal>
      <Modal title="All Games" modalId="allgames">
        <Games state={state} dispatch={dispatch} />
      </Modal>
      <Header state={state} dispatch={dispatch} />
      <Main state={state} dispatch={dispatch} />
      <Footer />
    </div>
  );
}

export default App;
