import {  useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/ToDoList";
import "../src/index.css";
import TodoInput from "./components/TodoInput";


function App() {
    //  const [todos, setTodos] = useState([]);
      const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
    
     
    return (
        <section className="bg-sky-500 min-h-screen px-3 flex flex-col items-center py-10">
            
            <Header />
            <TodoInput setTodos={setTodos}  />
            <TodoList setTodos={setTodos} todos={todos}  />
          
        </section>
    );
}

export default App

