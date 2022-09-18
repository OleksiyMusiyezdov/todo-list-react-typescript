import React, { useState } from "react";
import { ITodo } from "../interfaces";
import "./list.css";

interface ITodoProps {
  todo: ITodo;
  changeIsDone: (id: string) => void;
  remove: (id: string) => void;
  editTodo: (editedTodo: ITodo) => void;
}

export const Todo = ({ todo, changeIsDone, remove, editTodo }: ITodoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoBody, setTodoBody] = useState<string>(todo.body);

  const handleEdit = () => {
    const todoEdited: ITodo = { ...todo, body: todoBody };
    editTodo(todoEdited);
    setTodoBody("");
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <div className="input-block">
          <input
            style={{ minWidth: 650 }}
            className="textarea"
            value={todoBody}
            onChange={(e) => setTodoBody(e.target.value)}
          />
          <button className="button" onClick={handleEdit}>
            Save
          </button>
        </div>
      ) : (
        <div className="todo">
          <div
            className="text"
            style={
              todo.isDone
                ? { textDecorationLine: "line-through" }
                : { textDecorationLine: "none" }
            }
          >
            {todo.body}
          </div>
          <button
            className="status"
            style={{ minWidth: 150 }}
            onClick={() => changeIsDone(todo.id)}
          >
            {todo.isDone ? "Mark as undone" : "Mark as done"}
          </button>

          <button
            className="edit"
            disabled={todo.isDone ? true : false}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>

          <button className="remove" onClick={() => remove(todo.id)}>
            Remove
          </button>
        </div>
      )}
    </>
  );
};
