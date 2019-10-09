import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/todoReducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [list, dispatch] = useReducer(reducer, initialState);
  console.log(`this is list state`, list);

  return (
    <div className="todo-list">
      <TodoForm dispatch={dispatch} />

      {list.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
