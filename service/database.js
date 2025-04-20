import mongoose from "mongoose"
import dotenv from "dotenv"

await mongoose.connect(process.on.CONNECTION_URL)

const employeesSchema = new mongoose.Schema({
    employee_id: Number,
    full_name: String,
    email: String,
    hashed_password: String
})
const employees = mongoose.model("Employees", employeesSchema)

const projectsSchema = new mongoose.Schema({
    project_code: String,
    project_name: String,
    project_description: String
})
const projects = mongoose.model("Projects", projectsSchema)

const projectAssignmentSchema = new mongoose.Schema({
    employee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employees'},
    project_code: {type: mongoose.Schema.Types.ObjectId, ref: 'Projects'},
    start_date: Date
})
const projectAssignment = mongoose.model("Assignment", projectAssignmentSchema)
