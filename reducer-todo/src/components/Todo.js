import React, { useReducer } from "react";

const Todo = ({ todo, dispatch }) => {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_EDIT",
      payload: todo.id
    });
  };

  const clearRemove = () => {
    dispatch({
      type: "REMOVE_TODO",
      payload: todo.id
    });
  };

  console.log(`this is props`, todo);

  return (
    <div className="todo-container">
      <div
        className={`item${todo.completed ? " completed" : ""}`}
        onClick={toggleCompleted}
      >
        <p className="item-todo">{todo.item}</p>
      </div>
      <button onClick={clearRemove}>Clear</button>
    </div>
  );
};

export default Todo;
