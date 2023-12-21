import React, { useState } from "react";
import Table from "./Table";

const SearchBar = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const columns = ["ID", "Name"];
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const filteredData = data.filter((ele) =>
    ele.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const rowRender = (rowData) => (
    <>
      <td>{rowData.id}</td>
      <td>{rowData.name}</td>
      <td>{rowData.email}</td>
    </>
  );
  return (
    
    <div>
      <input
        type="search"
        placeholder="Search Here..."
        value={searchValue}
        onChange={handleSearch}
      />
       <Table columns={columns} data={filteredData} rowRender={rowRender}/>
    </div>
  );
};

export default SearchBar;
