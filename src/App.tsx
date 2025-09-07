@@ .. @@
   return (
-    <>
+    <div className="app">
       <h1>Todoリスト</h1>
       <TodoInput inputText={inputText} setInputText={setInputText} addTodo={addTodo}></TodoInput>
-      <h2>未完了のTodo</h2>
       <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} isCompleted={false}></TodoList>
-      <h2>完了のTodo</h2>
       <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} isCompleted={true}></TodoList>
-    </>
+    </div>
   );
 }