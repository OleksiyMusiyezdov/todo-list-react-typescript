import React, { useState } from "react";
import { ITodo } from "../interfaces";
import "./input.css";
import { v4 as uuidv4 } from "uuid";

interface IInputProps {
  addTodo: (newTodo: ITodo) => void;
}

export const Input = ({ addTodo }: IInputProps) => {
  const [todoBody, setTodoBody] = useState<string>("");

  const handleAdd = () => {
    const todo = {
      id: JSON.stringify(uuidv4()),
      body: todoBody,
      isDone: false,
    };

    addTodo(todo);
    setTodoBody("");
  };

  return (
    <div className="input-block">
      <input
        style={todoBody ? { minWidth: 650 } : { minWidth: 700 }}
        className="textarea"
        value={todoBody}
        onChange={(e) => setTodoBody(e.target.value)}
      />
      {todoBody && (
        <button className="button" onClick={handleAdd}>
          Add
        </button>
      )}
    </div>
  );
};
