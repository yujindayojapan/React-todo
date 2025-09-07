@@ .. @@
 const TodoInput: React.FC<TodoInputProps> = ({inputText, setInputText,addTodo}) => {

   return (
-    <>
+    <div className="todo-input-container">
       <input value={inputText} onChange={e => setInputText(e.target.value)} placeholder='入力してください' />
       <button onClick={addTodo}>追加</button>
-    </>
+    </div>
   );
 }