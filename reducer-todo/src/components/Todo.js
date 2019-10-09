import React, { useReducer } from "react";

const Todo = ({ todo, dispatch }) => {
  const toggleCompleted = () => {
    dispatch({
      type: "TOGGLE_EDIT",
      payload: todo.id
    });
  };

  console.log(`this is props`, todo);

  return (
    <div>
      <div
        className={`item${todo.completed ? " completed" : ""}`}
        onClick={toggleCompleted}
      >
        <p className="item-todo">{todo.item}</p>
        <button>Clear</button>
      </div>
    </div>
  );
};

export default Todo;
