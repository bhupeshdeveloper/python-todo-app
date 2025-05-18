import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get("http://localhost:8000/todos").then((res) => setTodos(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/todos", { title, description })
      .then((res) => {
        setTodos([...todos, res.data]);
        toast.success("Task added");
        setTitle("");
        setDescription("");
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
      toast.success("Task deleted");
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Toaster />
      <h1 className="text-3xl font-bold mb-4">ToDo List</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="border p-4 rounded shadow relative">
            <h2 className="text-xl font-semibold">{todo.title}</h2>
            <p>{todo.description}</p>
            <button
              onClick={() => handleDelete(todo.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;