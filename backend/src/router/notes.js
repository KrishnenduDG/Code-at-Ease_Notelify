import { Router } from "express";

const notesRouter = new Router();

// Chaining of Routes
notesRouter
  .post("/", (req, res) => {
    res.status(200).json({ status: true, msg: "Notes Creation (C) Route" });
  })
  .get("/", (req, res) => {
    res.status(200).json({ status: true, msg: "Notes Reading (R) Route" });
  })
  .patch("/", (req, res) => {
    res.status(200).json({ status: true, msg: "Notes Updating (U) Route" });
  })
  .delete("/", (req, res) => {
    res.status(200).json({ status: true, msg: "Notes Deletion (D) Route" });
  });

export default notesRouter;
