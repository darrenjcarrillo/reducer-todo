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
      <form onSubmit={submitTodo}>
        <label>Todo</label>
        <input name="todo" value={item} onChange={handleChanges} />
        <button>Add Todo</button>
        <button type="submit">Clear</button>
      </form>
    </div>
  );
};

export default TodoForm;
