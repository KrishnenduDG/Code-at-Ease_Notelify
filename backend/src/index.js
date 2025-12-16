import express from "express";
import authRouter from "./router/auth.js";
import notesRouter from "./router/notes.js";

const app = express();

const PORT = process.env.PORT;

// Just a Home Route to check the server
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: true, msg: "Notelify server up and running!!" });
});

// Mount the Routes (Kinda namespace)
app.use("/auth", authRouter);
app.use("/notes", notesRouter);

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
