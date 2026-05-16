import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Team Task Manager
        </h1>

        <div className="flex gap-4">

          <Link to="/login">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="bg-black text-white px-4 py-2 rounded-lg font-semibold">
              Register
            </button>
          </Link>

        </div>

      </nav>

      <div className="flex flex-col items-center justify-center mt-32 px-4">

        <h2 className="text-5xl font-bold text-center mb-6">
          Manage Your Team Efficiently
        </h2>

        <p className="text-gray-600 text-lg text-center max-w-2xl">
          Assign tasks, track progress, and collaborate easily.
        </p>

      </div>

    </div>
  )
}

export default Home