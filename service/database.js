import mongoose from "mongoose";

// employee schema
const employeesSchema = new mongoose.Schema({
    employee_id: Number,
    full_name: String,
    email: String,
    hashed_password: String
});
export const employees = mongoose.model("Employees", employeesSchema);

// project schema
const projectsSchema = new mongoose.Schema({
    project_code: String,
    project_name: String,
    project_description: String
});
export const projects = mongoose.model("Projects", projectsSchema);

// assignment schema
const projectAssignmentSchema = new mongoose.Schema({
    employee_id: {type: mongoose.Schema.Types.ObjectId, ref: "Employees"},
    project_code: {type: mongoose.Schema.Types.ObjectId, ref: "Projects"},
    start_date: Date
});
export const projectAssignment = mongoose.model("Assignment", projectAssignmentSchema);
