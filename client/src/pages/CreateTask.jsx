import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"

const CreateTask = () => {

  const navigate = useNavigate()
const [projects, setProjects] = useState([])
  const [formData, setFormData] = useState({
  title: "",
  description: "",
  status: "Pending",
  dueDate: "",
project: ""
})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
const fetchProjects = async () => {

  try {

    const res = await API.get("/projects")

    setProjects(res.data)

  } catch (error) {
    console.log(error)
  }
}
useEffect(() => {

  fetchProjects()

}, [])
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      await API.post("/tasks", formData)

      alert("Task Created")

      navigate("/dashboard")

    } catch (error) {
      console.log(error)
      alert("Failed to create task")
    }
  }

  return (
    <div className="ml-64 min-h-screen bg-black text-white p-8">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-96 space-y-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Create Task
        </h1>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800"
        />

        <textarea
          name="description"
          placeholder="Task Description"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800"
        />

        <select
          name="status"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
<input
  type="date"
  name="dueDate"
  onChange={handleChange}
  className="w-full p-3 rounded bg-gray-800 mb-4"
/>
<select
  name="project"
  onChange={handleChange}
  className="w-full p-3 rounded bg-gray-800"
>

  <option value="">
    Select Project
  </option>

  {projects.map((project) => (

    <option
      key={project._id}
      value={project._id}
    >
      {project.name}
    </option>

  ))}

</select>
        <button
          type="submit"
          className="w-full bg-blue-600 p-3 rounded"
        >
          Create Task
        </button>

      </form>

    </div>
  )
}

export default CreateTask