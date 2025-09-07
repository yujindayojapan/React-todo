import { useState } from "react";

//型定義
type Todo = {
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
      <input value={inputText} onChange={e => setInputText(e.target.value)} placeholder='入力してください' />
      <button onClick={addTodo}>追加</button>
      <h2>未完了のTodo</h2>
      <ul>
        {todos.filter((todo) => !todo.completed).map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          <button onClick={() => toggleTodo(todo.id)}>完了</button>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
      <h2>完了のTodo</h2>
      <ul>
        {todos.filter((todo) => todo.completed).map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          <button onClick={() => toggleTodo(todo.id)}>未完了</button>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
