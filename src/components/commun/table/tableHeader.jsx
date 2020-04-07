import React from "react";
import { IconSortAsc, IconSortDesc } from "../icon";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const raiseSort = (path) => {
    if (path === "") return null;
    const copySortColumn = { ...sortColumn };
    if (copySortColumn.path === path) {
      copySortColumn.order = copySortColumn.order === "asc" ? "desc" : "asc";
    } else {
      copySortColumn.path = path;
      copySortColumn.order = "asc";
    }
    onSort(copySortColumn);
  };

  const renderSortIcon = (path) => {
    if (path === "") return null;
    if (sortColumn.path !== path) return null;
    if (sortColumn.order === "asc") return <IconSortAsc />;
    return <IconSortDesc />;
  };

  return (
    <thead className="thead-light">
      <tr>
        {columns.map((column) => (
          <th key={column.key}>
            <span
              style={{ cursor: column.path === "" ? "default" : "pointer" }}
              onClick={() => raiseSort(column.path)}
            >
              {column.label} {renderSortIcon(column.path)}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
