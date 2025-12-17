import express from "express";
import authRouter from "./router/auth.js";
import notesRouter from "./router/notes.js";

const app = express();

const PORT = process.env.PORT;

// Global Middlewares

// (for request body parsing)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Just a Home Route to check the server
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: true, msg: "Notelify server up and running!!" });
});

// Mount the Routes (Kinda namespace)
app.use("/auth", authRouter);
app.use("/notes", notesRouter);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ status: false, msg: "Internal server error" });
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
