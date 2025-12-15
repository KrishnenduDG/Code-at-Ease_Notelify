import express from "express";

const app = express();

const PORT = process.env.PORT;

// Just a Home Route to check the server
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: true, msg: "Notelify server up and running!!" });
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
