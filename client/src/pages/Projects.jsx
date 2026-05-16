import { useEffect, useState } from "react"
import API from "../services/api"
import Navbar from "../components/Navbar"

function Projects() {

  const [projects, setProjects] = useState([])

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

  return (
    <>
      <Navbar />

      <div className="ml-64 min-h-screen bg-black text-white p-8">

        <h1 className="text-4xl font-bold mb-8">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (

            <div
              key={project._id}
              className="bg-gray-800 p-6 rounded-xl"
            >

              <h2 className="text-2xl font-bold mb-2">
                {project.name}
              </h2>

              <p className="text-gray-300">
                {project.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </>
  )
}

export default Projects