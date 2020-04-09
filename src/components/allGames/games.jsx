import React from "react";
import _ from "lodash";
import { toast } from "react-toastify";
import Pagination from "../commun/table/pagination";
import GamesTable from "./gamesTable";

import { paginate } from "../../utils";

const Games = ({ state, dispatch }) => {
  //

  const handlePageChange = (page) => {
    dispatch({ type: "PAGE_CHANGE", payload: page });
  };

  const handleSort = (sortColumn) => {
    dispatch({ type: "CHANGE_SORT", payload: sortColumn });
  };

  const handleCancel = async (id) => {
    // Snapshot of games before cancel the game
    const allGames = [...state.games];
    // Cancel local the game
    dispatch({ type: "CANCEL_GAME", payload: id });

    // Call the API
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
            gameID: id,
          }),
        }
      );

      if (response.status === 200) {
        // Game canceled sucessfully on the server
        toast(`Game canceled sucessfully.`);
      }

      if (response.status >= 400) {
        // Server can cancel the game. reverse the games
        dispatch({ type: "SET_GAMES", payload: allGames });
        const result = await response.json();
        toast(result.errmsg);
      }
    } catch (error) {
      // Something happen, reverse the games.
      dispatch({ type: "SET_GAMES", payload: allGames });
      toast("Something went wrong, check your network.");
    }
  };

  const getSettings = () => {
    const filtered = state.games;

    const sorted = _.orderBy(
      filtered,
      state.sortColumn.path,
      state.sortColumn.order
    );

    const elements = paginate(sorted, state.currentPage, state.pageSize);

    const totalPages = Math.ceil(filtered.length / state.pageSize);

    return {
      totalPages: totalPages,
      elements,
    };
  };

  const { totalPages, elements } = getSettings();

  return (
    <>
      <div style={{ minHeight: "380px" }}>
        <GamesTable
          data={elements}
          sortColumn={state.sortColumn}
          onSort={handleSort}
          user={state.user}
          onCancel={handleCancel}
        />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={state.currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Games;
