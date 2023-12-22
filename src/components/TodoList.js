import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(["Task 1", "Task 2", "Task 3"]);
  const [editIndex, setEditIndex] = useState(null);
  const handleAdd = () => {
    if(editIndex !== null){
        const updatedList = [...todoList]
        updatedList[editIndex] = inputValue
        setTodoList(updatedList)
        setEditIndex(null)
    }
   else{
    if (inputValue !== "") {
        setTodoList([...todoList, inputValue]);
       
      }
   }
   setInputValue("");
  };
  const handleRemove = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleEdit = (index) => {
   setEditIndex(index)
   setInputValue(todoList[index])
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your Tasks..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>{editIndex == null ? "ADD": "Edit"}</button>

      <ul>
        {todoList?.map((ele, index) => (
          <div style={{ display: "flex" }}>
            <li key={index}>{ele}</li>
            <button onClick={() => handleEdit(index)}>edit</button>

            <button onClick={() => handleRemove(index)}>x</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
