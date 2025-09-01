import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");         // input field
  const [todos, setTodos] = useState([]);       // todo list state

  // Add a task
  const addTask = () => {
    if (task.trim() === "") return;             // avoid empty task
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask("");                                // clear input
  };

  // Toggle complete/incomplete
  const toggleTask = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

        {/* Input Section */}
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="flex-grow p-2 border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul>
          {todos.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center bg-gray-50 p-2 mb-2 rounded-lg shadow-sm"
            >
              <span
                onClick={() => toggleTask(t.id)}
                className={`cursor-pointer ${
                  t.done ? "line-through text-gray-500" : ""
                }`}
              >
                {t.text}
              </span>
              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
