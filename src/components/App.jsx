import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Finish CS 283 homework', isComplete: false, isEditing: false},
    {id: 2, title: 'Go to grocery store', isComplete: false, isEditing: false},
    {id: 3, title: 'Another item', isComplete: false, isEditing: false},
  ]);

  const [todoInput, setTodoInput] = useState('')

  const [idForTodo, setIdForTodo] = useState(todos.length + 1);

  function addTodo(event) {
    event.preventDefault();

    if(todoInput.trim().length === 0) {
      return;
    }

    setTodos([...todos, {id: idForTodo, title: todoInput.trim(), isComplete: false, isEditing: false}]);

    setTodoInput('');
    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  function deleteTodo(id) {
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  function handleInput(event) {
    setTodoInput(event.target.value)
  }

  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function markAsEditing(id) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isEditing = true;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isEditing = false;

        if(event.target.value.trim().length === 0) {
          return todo;
        }

        todo.title = event.target.value.trim();
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function cancelEditing(id) {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="min-h-[100vh] p-2.5 bg-slate-100">
      <div className="m-auto mt-[30px] p-8 bg-white rounded-md shadow-lg max-w-[512px] text-slade-900">
        <h2 className="text-2xl font-bold">Todo App</h2>
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            className="w-full border-0 shadow p-3.5 text-lg mt-4"
            placeholder="What do you need to do?"
            value={todoInput}
            onChange={handleInput}
          />
        </form>

        <ul className="mt-8">
          { todos.map((todo, index) => (
          <li className="flex mt-6 items-center justify-between">
            <div className="flex flex-1 items-center text-lg mr-6">
              <input type="checkbox" onChange={() => completeTodo(todo.id)} checked={todo.isComplete} />
              
              { !todo.isEditing ? (
              <span onDoubleClick={() => markAsEditing(todo.id)} className={`ml-4 ${todo.isComplete ? 'line-through' : ''}`}>{todo.title}</span>
              ) : (
              <input 
              type="text" 
              className="ml-4 w-full border-0 shadow-mg p-2 text-lg"
              onBlur={(event) => updateTodo(event, todo.id)}
              onKeyDown={event => {
                if(event.key === 'Enter') {
                  updateTodo(event, todo.id);
                } else if(event.key === 'Escape') {
                  cancelEditing(todo.id);
                }
              }}
              defaultValue={todo.title} autoFocus />
              ) }
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="bg-white text-slate-400 hover:text-slate-700 border-0 cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          ))}
        </ul>

        <div className="flex justify-between items-center text-slate-600 mt-5 pt-4 border-t border-t-slate-200">
          <div>
            <div className="text-slate-600 text-sm bg-white border border-gray-200 p-1.5"rounded-lg cursor-pointer >Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="flex justify-between items-center text-slate-600 mt-5 pt-4 border-t border-t-slate-200">
          <div>
            <button className="text-slate-600 text-sm bg-white border border-white p-1.5 rounded-lg cursor-pointer hover:border-gray-300">
              All
            </button>
            <button className="text-slate-600 text-sm bg-white border border-white p-1.5 rounded-lg cursor-pointer hover:border-gray-300">Active</button>
            <button className="text-slate-600 text-sm bg-white border border-white p-1.5 rounded-lg cursor-pointer hover:border-gray-300">Completed</button>
          </div>
          <div>
            <button className="text-slate-600 text-sm bg-white border border-gray-200 p-1.5 rounded-lg cursor-pointer">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
