import type {TodoListProps} from "../../types.ts";
import {CheckSquare, Edit, Square,Trash2} from "lucide-react";

const TodoList = ({todos, deleteTodo, editTodo, toggleTodo}: TodoListProps) => {

  return (
    <>
      <ul className="space-y-2">
        {todos.map( todo => (
          <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded" >
            <div className="flex items-center gap-2 flex-1">
              <button
                className="text-green-500"
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.completed ? <CheckSquare size={18}/> : <Square size={18} /> }
              </button>
              <span>{todo.text}</span>
            </div>
            <div className="flex gap-2">
              <button
                className="text-cf-dark-gray cursor-pointer"
                // onClick={}
              >
                <Edit size={18}/>
              </button>
              <button
                className="text-cf-dark-red"
                onClick={() => deleteTodo(todo.id)}
              >
                <Trash2 size={18}/>
              </button>


            </div>




          </li>
        ))
        }


      </ul>
    </>
  )
}

export default TodoList