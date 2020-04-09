import React, { Component } from "react";
import Table from "../commun/table/table";
import { dateFormating } from "../../utils/index";

class GamesTable extends Component {
  columns = [
    { key: "gameOwner", path: "gameOwner", label: "User" },
    { key: "gameWord", path: "gameWord", label: "Word" },
    { key: "gameStatus", path: "gameStatus", label: "Status" },
    {
      key: "gameDate",
      path: "gameDate",
      label: "Date",
      content: (data) => dateFormating(data.gameDate),
    },
    { key: "winner", path: "winner", label: "Winner" },
    {
      key: "cancel",
      path: "",
      label: "",
      content: (data) => (
        <button
          type="button"
          className="btn btn-danger"
          disabled={
            !(data.gameOwner === this.props.user) ||
            !(data.gameStatus === "active")
          }
          onClick={() => this.props.onCancel(data._id)}
        >
          Cancel
        </button>
      ),
    },
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
