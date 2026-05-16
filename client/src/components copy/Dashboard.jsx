function Dashboard() {
  return (
    <div className="flex-1 p-8">

      <h2 className="text-4xl font-bold mb-8">
        Dashboard
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">
            Total Tasks
          </h3>

          <p className="text-4xl font-bold text-blue-600">
            24
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">
            Completed
          </h3>

          <p className="text-4xl font-bold text-green-600">
            18
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">
            Pending
          </h3>

          <p className="text-4xl font-bold text-red-500">
            6
          </p>
        </div>

      </div>

      {/* Recent Tasks */}
      <div className="mt-12 bg-white p-6 rounded-2xl shadow">

        <h3 className="text-2xl font-bold mb-6">
          Recent Tasks
        </h3>

        <div className="space-y-4">

          <div className="flex justify-between items-center border-b pb-3">
            <span>Design Login Page</span>

            <span className="text-yellow-500 font-semibold">
              In Progress
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span>Create Dashboard UI</span>

            <span className="text-green-600 font-semibold">
              Completed
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <span>Connect MongoDB</span>

            <span className="text-red-500 font-semibold">
              Pending
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard