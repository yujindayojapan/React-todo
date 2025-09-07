import React from 'react';
import { useState } from "react";
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todoリスト</h1>
      <TodoInput inputText={inputText} setInputText={setInputText} addTodo={addTodo}></TodoInput>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} isCompleted={false}></TodoList>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} isCompleted={true}></TodoList>
    </div>
  );
}

export default App;