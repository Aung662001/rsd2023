const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");

// app.header.add('Access-Control-Allow-Origin','*')
// app.header.add('Access-Control-Allow-Headers','*')
// app.header.add('Access-Control-Allow-Methods','*')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongo connection
const mongo = new MongoClient("mongodb://127.0.0.1:27017");
const db = mongo.db("todo"); //mongo database name

//endpoints
app.get("/tasks", async function (req, res) {
  const data = await db.collection("tasks").find().toArray();
  res.json(data);
});
app.post("/tasks", async function (req, res) {
  const { subject } = req.body;
  if (!subject)
    return res.sendStatus(400).json({ message: "Subject field required." });
  try {
    const result = await db
      .collection("tasks")
      .insertOne({ subject, done: false });
    const data = await db
      .collection("tasks")
      .findOne({ _id: new ObjectId(result.insertedId) });
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});
//toggle done
app.put("/tasks/:id/toggle", async function (req, res) {
  const { id } = req.params;
  const data = await db.collection("tasks").findOne({ _id: new ObjectId(id) });
  if (!data) return res.status(400).json({ message: "Subject Not found.." }); //check existing in db
  const result = await db
    .collection("tasks")
    .updateOne({ _id: new ObjectId(id) }, { $set: { done: !data.done } });
  res.json(result);
});
//delete endpoint
app.delete("/tasks/:id", async function (req, res) {
  const { id } = req.params;
  const data = await db.collection("tasks").findOne({ _id: new ObjectId(id) });
  if (!data) return res.status(400).json({ message: "Subject Not found.." }); ////check existing in db
  const result = await db
    .collection("tasks")
    .deleteOne({ _id: new ObjectId(id) });
  res.json(result);
});
//clear done subjects endpoint
app.delete("/tasks", async function (req, res) {
  const result = await db.collection("tasks").deleteMany({ done: true });
  res.json(result);
});

//listener
app.listen(4000, () => {
  console.log("app is running at port 4000");
});
