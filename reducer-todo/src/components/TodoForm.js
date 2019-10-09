import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/todoReducer";

const TodoForm = ({ dispatch }) => {
  const [item, setItem] = useState("");

  const submitTodo = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };

  const handleChanges = e => {
    setItem(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={submitTodo}>
        <input name="todo" value={item} onChange={handleChanges} />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
