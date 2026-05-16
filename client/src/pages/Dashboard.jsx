import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import API from "../services/api"
import Navbar from "../components/Navbar"

const Dashboard = () => {
    const navigate = useNavigate()

  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const fetchTasks = async () => {

    try {

      const res = await API.get("/tasks")

      setTasks(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const completedTasks = tasks.filter(
    task => task.status === "Completed"
  )

  const pendingTasks = tasks.filter(
    task => task.status !== "Completed"
  )
const deleteTask = async (id) => {

  try {

    await API.delete(`/tasks/${id}`)

    fetchTasks()

  } catch (error) {
    console.log(error)
  }
}
  return (
    <>
      <Navbar />

      <div className="ml-64 min-h-screen bg-black text-white p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl">
              Total Tasks
            </h2>

            <p className="text-3xl font-bold mt-2">
              {tasks.length}
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl">
              Completed
            </h2>

            <p className="text-3xl font-bold mt-2 text-green-400">
              {completedTasks.length}
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl">
              Pending
            </h2>

            <p className="text-3xl font-bold mt-2 text-yellow-400">
              {pendingTasks.length}
            </p>
          </div>

        </div>

        {/* Tasks Section */}
        <div className="bg-gray-900 p-6 rounded-lg">

          <h2 className="text-2xl font-bold mb-6">
            Recent Tasks
          </h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search tasks..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white mb-6"
          />

          {/* Filter */}
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white mb-6"
          >

            <option value="All">
              All Tasks
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="In Progress">
              In Progress
            </option>

            <option value="Completed">
              Completed
            </option>

          </select>

          {/* Tasks List */}
          <div className="space-y-4">

            {tasks
              .filter(task =>
                task.title.toLowerCase().includes(
                  search.toLowerCase()
                )
              )

              .filter(task =>
                filter === "All"
                  ? true
                  : task.status === filter
              )

              .map((task) => (

                <div
                  key={task._id}
                  className={`p-4 rounded ${
                    task.dueDate &&
                    new Date(task.dueDate) < new Date() &&
                    task.status !== "Completed"
                      ? "bg-red-900"
                      : "bg-gray-800"
                  }`}
                >

                  <h3 className="text-xl font-semibold">
                    {task.title}
                  </h3>

                  <p className="text-gray-400">
                    {task.description}
                  </p>
                  <p className="text-blue-400 mt-2">
  Project:
  {" "}
  {task.project
    ? task.project.name
    : "No Project"}
</p>

                  <p className="text-sm text-gray-400 mb-2">
                    Due:
                    {" "}
                    {task.dueDate
                      ? new Date(task.dueDate).toLocaleDateString()
                      : "No due date"}
                  </p>

                  <span className="inline-block mt-2 text-sm bg-blue-600 px-3 py-1 rounded">
                    {task.status}
                  </span>
                  <button
  onClick={() => navigate(`/edit-task/${task._id}`)}
  className="mt-4 mr-3 bg-yellow-500 px-4 py-2 rounded"
>
  Edit
</button>
<button
  onClick={() => deleteTask(task._id)}
  className="mt-4 bg-red-600 px-4 py-2 rounded"
>
  Delete
</button>
                </div>

              ))}

          </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard