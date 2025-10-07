import {useState, useRef} from "react";
import TodoForm from "./TodoForm.tsx";
import type {TodoProps} from "../../types.ts";
import TodoList from "./TodoList.tsx";
import TodoStats from "./TodoStats.tsx";

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

  const totalTasks = todos.length;
  const completedTasks = todos.filter(t => t.completed).length;
  const activeTasks = totalTasks - completedTasks;

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

        {totalTasks > 0 && (
          // Component: TodoStats
          <TodoStats
            total={totalTasks}
            active={activeTasks}
            completed={completedTasks}
          />
        )}
        {/*  Component: Button */}
      </div>
    </>
  );
};

export default Todo;