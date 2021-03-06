import React from "react";
import _ from "lodash";
import Pagination from "../commun/table/pagination";
import ScoresTable from "./scoresTable";

import { paginate } from "../../utils";

const Scores = ({ state, dispatch }) => {
  //

  const handlePageChange = (page) => {
    dispatch({ type: "PAGE_CHANGE", payload: page });
  };

  const handleSort = (sortColumn) => {
    dispatch({ type: "CHANGE_SORT", payload: sortColumn });
  };

  const getSettings = () => {
    const filtered = state.scoresTables;

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
        <ScoresTable
          data={elements}
          sortColumn={state.sortColumn}
          onSort={handleSort}
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

export default Scores;
