import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    navigate("/login")
  }

  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white fixed left-0 top-0 p-8">
      <h1 className="text-4xl font-bold mb-12">Team Task</h1>

      <div className="flex flex-col gap-8 text-2xl">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/create-task">Create Task</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/create-project">Create Project</Link>

        <button
          onClick={logoutHandler}
          className="bg-red-600 px-4 py-3 rounded mt-10"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar