const express = require("express");
const cors = require("cors");
require("dotenv").config();
const taskRoutes = require('./routes/tasks')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/tasks', taskRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})