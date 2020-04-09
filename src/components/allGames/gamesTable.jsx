import React, { Component } from "react";
import Table from "../commun/table/table";

class GamesTable extends Component {
  columns = [
    { key: "gameOwner", path: "gameOwner", label: "User" },
    { key: "gameWord", path: "gameWord", label: "Word" },
    { key: "gameStatus", path: "gameStatus", label: "Status" },
    { key: "gameDate", path: "gameDate", label: "gameDate" },
    { key: "winner", path: "winner", label: "Winner" },
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

export default GamesTable;
