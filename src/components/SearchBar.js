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

  return (
    
    <div>
      <input
        type="search"
        placeholder="Search Here..."
        value={searchValue}
        onChange={handleSearch}
      />
       <Table columns={columns} data={filteredData} />
    </div>
  );
};

export default SearchBar;
