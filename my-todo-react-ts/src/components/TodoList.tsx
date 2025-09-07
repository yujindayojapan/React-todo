import React from 'react';
import type { Todo } from '../App';

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    isCompleted: boolean;
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, deleteTodo, isCompleted}) => {
  return (
    <>
      <ul>
        {todos.filter((todo) => todo.completed === isCompleted).map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          <button onClick={() => toggleTodo(todo.id)}>{isCompleted ? "未完了" : "完了"}</button>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
      </>
  );
}

export default TodoList