import { Router } from "express";
import NotesController from "../controller/notes.js";
import { authMiddleware } from "../middlewares/index.js";

const notesRouter = new Router();

// Chaining of Routes
notesRouter
  .post("/", authMiddleware, NotesController.handleCreateNote)
  .get("/", authMiddleware, NotesController.handleGetNote)
  .patch("/", authMiddleware, NotesController.handleUpdateNote)
  .delete("/", authMiddleware, NotesController.handleDeleteNote);

export default notesRouter;
