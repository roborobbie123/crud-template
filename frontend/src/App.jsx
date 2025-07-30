import { useState, useEffect } from "react";
import axios from "axios";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import "./app.css";

const API = "http://localhost:4000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
    console.log("fetching");
  };

  const createTask = async () => {
    await axios.post(API, form);
    setForm({ title: "", description: "" });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  return (
    <div className="flex flex-col p-10">
      <h1 className="mb-5">Template App</h1>
      <NewTask createTask={createTask} setForm={setForm} form={form} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
