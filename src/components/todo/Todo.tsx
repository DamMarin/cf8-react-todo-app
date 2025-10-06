import {useState, useRef} from "react";
import TodoForm from "./TodoForm.tsx";
import type {TodoProps} from "../../types.ts";
import TodoList from "./TodoList.tsx";

const Todo = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = (text: string) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text: text, completed: false }
      ]);
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  const editTodo = (id: number, newText: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? {...todo, text:newText}: todo
      )
    );
  }

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed}: todo
      )
    );
  };


  return (
    <>
      <div className="max-w-sm mx-auto pb-12">
        <h1 className="text-center text-2xl py-8">To-Do List</h1>

        {/*  Component: TodoForm */}
        <TodoForm addTodo={addTodo} inputRef={inputRef}/>

        {/*  Component: TodoList */}
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
        />

        {/*  Component: TodoStats */}
        {/*  Component: Button */}

        {/*[*/}
        {/*{"id":1759763950197,"text":"task 1","completed":false},*/}
        {/*{"id":1759765990983,"text":"newText","completed":false},*/}
        {/*{"id":1759763950197,"text":"Task 3","completed":false}*/}
        {/*]*/}

      </div>
    </>
  );
};

export default Todo;