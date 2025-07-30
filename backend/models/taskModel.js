// Import the configured PostgreSQL connection pool
const pool = require("../db");

// Function to fetch all tasks from the database
const getAllTasks = async () => {
  // Execute a SQL query to select all rows from the 'tasks' table
  const res = await pool.query("SELECT * FROM tasks");
  // Return the array of rows from the result
  return res.rows;
};

// Function to fetch a single task by its ID
const getTaskById = async (id) => {
  // Use parameterized query to avoid SQL injection
  const res = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
  // Return the first (and only) row found
  return res.rows[0];
};

// Function to create a new task with title and description
const createTask = async (title, description) => {
  // Insert a new row and return the inserted row using RETURNING *
  const res = await pool.query(
    "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  // Return the created task row
  return res.rows[0];
};

// Function to update an existing task by ID
const updateTask = async (id, title, description) => {
  // Update the row with new title and description, return the updated row
  const res = await pool.query(
    "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );
  // Return the updated task
  return res.rows[0];
};

// Function to delete a task by ID
const deleteTask = async (id) => {
  // Delete the row with the specified ID
  const res = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
  // No need to return anything since the row is deleted
};

// Export all functions so they can be used in other files (e.g., routes)
module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
