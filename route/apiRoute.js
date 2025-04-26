import express from "express"
import Collection from "../controller/collectionController.js"

export const router = express.Router()

router.post("/api/employees", Collection.addNewEmployee)
router.post("/api/projects", Collection.addNewProject)
router.post("/api/project_assignments", Collection.assignEmployee)
router.get("/api/project_assignments", Collection.listAllPopulatedAssignments)