import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"
import Navbar from "../components/Navbar"

function CreateProject() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    description: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post("/projects", formData)

      alert("Project Created")

      navigate("/projects")

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />

      <div className="ml-64 min-h-screen bg-black text-white p-8">

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-xl w-96"
        >

          <h1 className="text-3xl text-white font-bold mb-6">
            Create Project
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Project Name"
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white mb-4"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 p-3 rounded text-white"
          >
            Create
          </button>

        </form>

      </div>
    </>
  )
}

export default CreateProject