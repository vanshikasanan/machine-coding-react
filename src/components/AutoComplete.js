import React, { useEffect, useState } from "react";

export const AutoComplete = ({options}) => {
  const [inputValue, setInputValue] = useState("");

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    const filtered = options.filter((ele) =>
      ele.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }, [inputValue, options]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Search..."
        onChange={handleInputChange}
      />
      <ul>
        {filteredSuggestions.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
};
