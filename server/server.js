const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const authRoutes = require("./routes/authRoutes")
const taskRoutes = require("./routes/taskRoutes")
const projectRoutes = require("./routes/projectRoutes")
dotenv.config()

const app = express()

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://localhost:5176",
    "https://team-task-manager-x9m9.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/tasks", taskRoutes)
app.get("/api/test", (req, res) => {
  res.send("API test working")
})

app.use("/api/projects", projectRoutes)

app.get("/", (req, res) => {
  res.send("API is running...")
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected")
  })
  .catch((error) => {
    console.log(error)
  })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})