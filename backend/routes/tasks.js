// Import Express to create a router for task-related routes
const express = require("express");
const router = express.Router();

// Import task model functions for database interaction
const taskModel = require("../models/taskModel");

// GET /tasks - Retrieve all tasks
router.get("/", async (req, res) => {
  const tasks = await taskModel.getAllTasks(); // Get all tasks from DB
  res.json(tasks); // Send tasks as JSON
});

// GET /tasks/:id - Retrieve a single task by ID
router.get("/:id", async (req, res) => {
  const task = await taskModel.getTaskById(req.params.id); // Get task by ID
  res.json(task); // Send task as JSON
});

// POST /tasks - Create a new task
router.post("/", async (req, res) => {
  const { title, description } = req.body; // Extract task data from request body
  const newTask = await taskModel.createTask(title, description); // Insert into DB
  res.status(201).json(newTask); // Send created task with 201 status
});

// PUT /tasks/:id - Update an existing task by ID
router.put("/:id", async (req, res) => {
  const { title, description } = req.body; // Extract updated data
  const updatedTask = await taskModel.updateTask(req.params.id, title, description); // Update DB
  res.json(updatedTask); // Send updated task
});

// DELETE /tasks/:id - Delete a task by ID
router.delete("/:id", async (req, res) => {
  await taskModel.deleteTask(req.params.id); // Delete from DB
  res.sendStatus(204); // No content response
});

// Export the router so it can be used in the main server
module.exports = router;
