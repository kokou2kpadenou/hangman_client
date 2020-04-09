import React, { Component } from "react";
import Table from "../commun/table/table";

class ScoresTable extends Component {
  columns = [
    { key: "user", path: "user", label: "User" },
    { key: "score", path: "score", label: "Score" },
  ];

  render() {
    const { data, sortColumn, onSort } = this.props;
    return (
      <Table
        data={data}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ScoresTable;
