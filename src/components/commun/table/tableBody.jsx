import React from "react";
import TableLine from "./tableLine";

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map(item => (
        <TableLine key={item.label} data={item} columns={columns} />
      ))}
    </tbody>
  );
};

export default TableBody;
