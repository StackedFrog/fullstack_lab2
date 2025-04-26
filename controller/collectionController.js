import { employees, projects, projectAssignment } from "../service/database.js";

class Collection {
    // adds a new employee
    async addNewEmployee(req, res, next) {
        const employee = new employees(req?.body);
        await employee.save();
        res.status(201).send();
    }
    // create a new project
    async addNewProject(req, res, next) {
        const project = new projects(req?.body);
        await project.save();
        res.status(201).send();
    }
    // assign an employee to a project
    async assignEmployee(req, res, next) {
        const project = new projectAssignment(req?.body);
        await project.save();
        res.status(201).send();
    }
    // list all assignments with data
    async listAllPopulatedAssignments(req, res, next) {
        const assignments = await projectAssignment
            .find()
            .populate("employee_id")
            .populate("project_code")
            .sort({ start_date: -1 })
            .limit(5);
        res.json(assignments);
    }
}

export default new Collection();