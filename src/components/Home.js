import React, { useState } from "react";
import Todolist from "../components/toDoList/index";
import ToDoFrom from "./TodoFrom";

const Home = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValue) {
    console.log("formSubmit", formValue);
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div>
      <h1>React-Hook-Todo List</h1>
      <ToDoFrom onSubmit={handleTodoFormSubmit} />
      <button onClick={handleTodoFormSubmit}>save</button>
      <Todolist todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
};

export default Home;
