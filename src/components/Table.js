import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => (
            <tr key={index}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
