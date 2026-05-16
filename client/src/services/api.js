import axios from "axios"

const API = axios.create({
  baseURL: "https://team-task-manager-l242.onrender.com/api"
})

export default API