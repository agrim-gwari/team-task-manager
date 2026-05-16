import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
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

      await API.post("/auth/register", formData)

      alert("Registration Successful")

      navigate("/login")

    } catch (error) {
      console.log(error)
      alert("Registration Failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-96 space-y-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 p-3 rounded"
        >
          Register
        </button>

      </form>

    </div>
  )
}

export default Register