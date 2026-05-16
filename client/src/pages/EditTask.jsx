import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import API from "../services/api"

const EditTask = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending"
  })

  const fetchTask = async () => {

    try {

      const res = await API.get(`/tasks/${id}`)

      setFormData(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTask()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.put(`/tasks/${id}`, formData)

      alert("Task Updated")

      navigate("/dashboard")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-96 space-y-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Edit Task
        </h1>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          type="submit"
          className="w-full bg-yellow-500 p-3 rounded"
        >
          Update Task
        </button>

      </form>

    </div>
  )
}

export default EditTask