import React from 'react';
//型定義
type TodoInputProps = {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    addTodo: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({inputText, setInputText,addTodo}) => {

  return (
    <>
      <input value={inputText} onChange={e => setInputText(e.target.value)} placeholder='入力してください' />
      <button onClick={addTodo}>追加</button>
    </>
  );
}

export default TodoInput
