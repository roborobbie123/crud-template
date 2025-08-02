import { useState, useEffect } from "react";
import axios from "axios";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import "./app.css";

const API = "http://localhost:4000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [updateForm, setUpdateForm] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  // Async function to fetch tasks from the API and update state
  const fetchTasks = async () => {
    const res = await axios.get(API); // Perform GET request
    setTasks(res.data); // Update tasks state with data from server
    console.log("fetching");
  };

  // Async function to create a new task
  const createTask = async () => {
    await axios.post(API, form); // Send form data to API via POST request
    setForm({ title: "", description: "" }); // Reset form fields
    fetchTasks(); // Refresh task list
  };

  const updateTask = async (id) => {
    await axios.put(`${API}/${id}`, updateForm);
    fetchTasks();
  };

  // Async function to delete a task by its ID
  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`); // DELETE request to remove task
    fetchTasks(); // Refresh task list
  };

  return (
    <div className="flex flex-col p-10">
      <h1 className="mb-5">Template App</h1>
      <NewTask createTask={createTask} setForm={setForm} form={form} />
      <Tasks tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} updateForm={updateForm} setUpdateForm={setUpdateForm}/>
    </div>
  );
}

export default App;
