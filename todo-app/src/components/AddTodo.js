import React, { useState } from 'react';
import './AddTodo.css';

const AddTodo = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button">Add</button>
    </form>
  );
};

export default AddTodo;
