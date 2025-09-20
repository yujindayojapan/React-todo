import React from 'react';
import type { Todo } from '../App';
import '../App.css';

//型定義
type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  isCompleted: boolean;
}

//Todoリストコンポーネント
const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo, isCompleted }) => {
  return (
    <>
      <ul>
        {todos.filter((todo) => todo.completed === isCompleted).map(todo => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed-todo' : ''}`}>
            <span className='todo-text'>{todo.text}</span>
            <button className={`toggle-btn ${todo.completed ? 'uncomplete' : ''}`} onClick={() => toggleTodo(todo.id)}>{isCompleted ? "未完了" : "完了"}</button>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList