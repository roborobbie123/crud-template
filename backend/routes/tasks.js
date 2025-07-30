const express = require("express");
const router = express.Router();
const taskModel = require("../models/taskModel");

router.get("/", async (req, res) => {
  res.json(await taskModel.getAllTasks());
});

router.get("/:id", async (req, res) => {
  res.json(await taskModel.getTaskById(req.params.id));
});

router.get("/", async (req, res) => {
  const { title, description } = req.body;
  res.status(201).json(await taskModel.createTask(title, description));
});

router.get('/:id', async (req, res) => {
    const { title, description } = req.body;
    res.json(await taskModel.updateTask(req.params.id, title, description))
})

router.get('/:id', async (req, res) => {
    res.json(await taskModel.deleteTask(req.params.id))
})

module.exports = router;
