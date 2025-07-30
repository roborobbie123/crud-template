const pool = require("../db");

const getAllTasks = async () => {
  const res = await pool.query("SELECT * FROM tasks");
  return res.rows;
};

const getTaskById = async (id) => {
  const res = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
  return res.rows[0];
};

const createTask = async (title, description) => {
  const res = await pool.query(
    "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

const updateTask = async (id, title, description) => {
  const res = await pool.query(
    "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );
  return res.rows[0];
};

const deleteTask = async (id) => {
  const res = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
