@@ .. @@
 const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, deleteTodo, isCompleted}) => {
+  const filteredTodos = todos.filter((todo) => todo.completed === isCompleted);
+  
   return (
-    <>
+    <div className="todo-section">
+      <h2>{isCompleted ? "完了のTodo" : "未完了のTodo"}</h2>
+      {filteredTodos.length === 0 ? (
+        <div className="empty-state">
+          {isCompleted ? "完了したタスクはありません" : "未完了のタスクはありません"}
+        </div>
+      ) : (
       <ul>
-        {todos.filter((todo) => todo.completed === isCompleted).map(todo => (
-          <li key={todo.id}>
+        {filteredTodos.map(todo => (
+          <li key={todo.id} className={isCompleted ? "completed-todo" : ""}>
             <span>{todo.text}</span>
-          <button onClick={() => toggleTodo(todo.id)}>{isCompleted ? "未完了" : "完了"}</button>
-          <button onClick={() => deleteTodo(todo.id)}>削除</button>
+            <div className="button-group">
+              <button 
+                className={`toggle-btn ${isCompleted ? "uncomplete" : ""}`}
+                onClick={() => toggleTodo(todo.id)}
+              >
+                {isCompleted ? "未完了" : "完了"}
+              </button>
+              <button 
+                className="delete-btn"
+                onClick={() => deleteTodo(todo.id)}
+              >
+                削除
+              </button>
+            </div>
           </li>
         ))}
       </ul>
-      </>
+      )}
+    </div>
   );
 }