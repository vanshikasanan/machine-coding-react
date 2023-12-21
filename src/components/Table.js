import React from "react";

const Table = ({ columns, data, rowRender }) => {
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
            <tr key={index}>{rowRender(ele)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
