function Sidebar() {
  return (
    <div className="w-64 bg-blue-700 text-white p-6 min-h-screen">

      <h1 className="text-3xl font-bold mb-10">
        Team Task
      </h1>

      <ul className="space-y-6 text-lg">

        <li className="hover:text-gray-300 cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          My Tasks
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          Projects
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          Team
        </li>

        <li className="hover:text-gray-300 cursor-pointer">
          Settings
        </li>

      </ul>

    </div>
  )
}

export default Sidebar