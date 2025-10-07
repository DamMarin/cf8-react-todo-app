import {useState} from "react";
import {CheckSquare, Edit, Save, Square, Trash2, X} from "lucide-react";
import IconButton from "../ui/IconButton.tsx";
import type {TodoListProps} from "../../types.ts";

const TodoList = ({todos, deleteTodo, editTodo, toggleTodo}: TodoListProps) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id: number, text: string) => () => {
    setEditId(id);
    setEditText(text);
  }

  const handleSave = (id: number) => () => {
    if (editText.trim() !== "") {
      editTodo(id, editText);
      setEditId(null);
      setEditText("");
    }
  }

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  }

  return (
    <>
      <ul className="space-y-2">
        {todos.map( todo => (
          <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded" >
            {editId === todo.id ? (
              <>
                <div className="flex flex-1 gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => {setEditText(e.target.value)}}
                    className="flex-1 border rounded p-1"
                  />
                  <IconButton icon={<Save size={18}/>} onClick={handleSave(todo.id)} />
                  <IconButton
                    icon={<X size={18}/>}
                    onClick={handleCancel}
                    addClasses="text-cf-dark-red"/>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 flex-1">
                  <IconButton
                    addClasses={"text-green-500"}
                    onClick={() => toggleTodo(todo.id)}
                    icon={todo.completed ? <CheckSquare size={18}/> : <Square size={18} /> }
                  />
                  <span>{todo.text}</span>
                </div>
                <div className="flex gap-2">
                  <IconButton
                    onClick={handleEdit(todo.id, todo.text)}
                    icon={<Edit size={18}/>}
                  />
                  <IconButton
                    addClasses="text-cf-dark-red"
                    onClick={() => deleteTodo(todo.id)}
                    icon={<Trash2 size={18}/>}
                  />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList