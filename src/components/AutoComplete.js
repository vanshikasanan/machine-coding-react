import React, { useEffect, useState } from "react";

export const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions] = useState([
    "Apple",
    "Orange",
    "Banana",
    "Grapes",
  ]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  useEffect(() => {
    const filtered = suggestions.filter((ele) =>
      ele.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }, [inputValue, suggestions]);

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
