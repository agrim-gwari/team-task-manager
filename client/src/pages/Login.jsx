import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"

const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
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

      const res = await API.post("/auth/login", formData)

      localStorage.setItem("token", res.data.token)
      localStorage.setItem("role", res.data.role)

      alert("Login Successful")

      navigate("/dashboard")

    } catch (error) {
      console.log(error)
      alert("Login Failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-96 space-y-4"
      >

        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

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
          className="w-full bg-green-600 p-3 rounded"
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default Login