import React, { useState } from "react";
import Table from "./Table";

const SearchBar = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const columns = ["ID", "First Name","Last Name","Email"];
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const filteredData = Array.isArray(data?.users)
  ? data.users.filter((user) =>
      user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase())
    )
  : [];

const rowRender = (user) => (
  <>
    <td>{user.id}</td>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.email}</td>
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
