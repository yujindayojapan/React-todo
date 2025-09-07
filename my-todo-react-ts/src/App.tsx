import React from 'react';
import { useState } from "react";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

//型定義
export  type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  //状態管理
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  //イベント
  //Todo追加
  const addTodo = () => {
    //入力が空白の場合は追加しない
    if (inputText.trim() === "") return;
    //新しいTodoを作成してリスクに追加する
    setTodos([...todos,{id:todos.length + 1, text: inputText, completed: false}]);
    //入力欄をクリアする
    setInputText("");
  }
  //Todo完了状態切り替え
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  }

  //Todo削除
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <h1>Todoリスト</h1>
      <TodoInput inputText={inputText} setInputText={setInputText} addTodo={addTodo}></TodoInput>
      <h2>未完了のTodo</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} isCompleted={false}></TodoList>
      <h2>完了のTodo</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} isCompleted={true}></TodoList>
    </>
  );
}

export default App
