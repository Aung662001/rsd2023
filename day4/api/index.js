const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/users", (req, res) => {
  const data = [
    { id: 1, name: "aung" },
    { id: 2, name: "maung" },
    { id: 3, name: "kaung" },
  ];
  res.json(data);
});
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.post("/users", (req, res) => {
  const { subject } = req.body;
  if (!subject) return res.status(400).json({ message: "subject required" });
  return res.json(subject);
});

app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`);
});
