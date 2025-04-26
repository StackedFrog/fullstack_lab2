import express from "express";
import Collection from "../controller/collectionController.js";

// create a router
export const router = express.Router();

// define routers
router.post("/api/employees", Collection.addNewEmployee);
router.post("/api/projects", Collection.addNewProject);
router.post("/api/project_assignments", Collection.assignEmployee);
router.get("/api/project_assignments", Collection.listAllPopulatedAssignments);