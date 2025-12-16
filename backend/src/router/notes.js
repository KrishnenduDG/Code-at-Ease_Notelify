import { Router } from "express";
import NotesController from "../controller/notes.js";

const notesRouter = new Router();

// Chaining of Routes
notesRouter
  .post("/", NotesController.handleCreateNote)
  .get("/", NotesController.handleGetNote)
  .patch("/", NotesController.handleUpdateNote)
  .delete("/", NotesController.handleDeleteNote);

export default notesRouter;
