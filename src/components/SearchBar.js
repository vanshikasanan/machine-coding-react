import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const filteredData = data.filter((ele) =>
    ele.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search Here..."
        value={searchValue}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((ele, index) => (
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

export default SearchBar;
