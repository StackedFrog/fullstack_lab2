import mongoose from "mongoose"

const employeesSchema = new mongoose.Schema({
    employee_id: Number,
    full_name: String,
    email: String,
    hashed_password: String
})
export const employees = mongoose.model("Employees", employeesSchema)

const projectsSchema = new mongoose.Schema({
    project_code: String,
    project_name: String,
    project_description: String
})
export const projects = mongoose.model("Projects", projectsSchema)

const projectAssignmentSchema = new mongoose.Schema({
    employee_id: {type: mongoose.Schema.Types.ObjectId, ref: "Employees"},
    project_code: {type: mongoose.Schema.Types.ObjectId, ref: "Projects"},
    start_date: Date
})
export const projectAssignment = mongoose.model("Assignment", projectAssignmentSchema)
