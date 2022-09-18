import React from "react";
import { ITodo } from "../interfaces";
import "./list.css";
import { Todo } from "./todo.component";

interface ITodoListProps {
  todoList: Array<ITodo>;
  changeIsDone: (id: string) => void;
  remove: (id: string) => void;
  editTodo: (editedTodo: ITodo) => void;
}

export const List = ({
  todoList,
  changeIsDone,
  remove,
  editTodo,
}: ITodoListProps) => {
  return (
    <div className="list-container">
      {todoList
        .sort((a, b) => Number(a.isDone) - Number(b.isDone))
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            changeIsDone={changeIsDone}
            remove={remove}
            editTodo={editTodo}
          />
        ))}
    </div>
  );
};
