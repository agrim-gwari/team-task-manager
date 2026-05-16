const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({

    project: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Project"
},

  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending"
  },
  dueDate: {
  type: Date
},

  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true })

module.exports = mongoose.model("Task", taskSchema)