import React, { useCallback, useState } from "react";
import "./App.css";
import { Input } from "./components/input.component";
import { List } from "./components/list.component";

import { ITodo } from "./interfaces";

function App() {
  const [todoList, setTodoList] = useState<Array<ITodo>>([]);

  const remove = (id: string) => {
    const theRest = todoList.filter((todo) => todo.id !== id);
    setTodoList(theRest);
  };

  const addTodo = useCallback(
    (newTodo: ITodo) => {
      setTodoList([...todoList, newTodo]);
    },
    [todoList]
  );

  const editTodo = useCallback(
    (editedTodo: ITodo) => {
      const theRest = todoList.filter((todo) => todo.id !== editedTodo.id);
      setTodoList([...theRest, editedTodo]);
    },
    [todoList]
  );

  const changeIsDone = (id: string) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list</h2>
        <p>Created for practicing in React and Typescript</p>
      </header>

      <Input addTodo={addTodo} />
      <List
        todoList={todoList}
        changeIsDone={changeIsDone}
        remove={remove}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
