const { MongoClient, ObjectId } = require("mongodb");
const mongo = new MongoClient("mongodb://127.0.0.1");
const db = mongo.db("todo");
const tasks = db.collection("tasks");
async function read() {
  const data = await db.collection("tasks").findOne();
  console.log(data);
}
async function insert(doc) {
  const result = await tasks.insertOne(doc);
  console.log(result);
}
async function deleteOne(loc) {
  const result = await tasks.deleteOne({ loc });
  console.log(result);
}
async function updateOne(loc, upd) {
  const result = await tasks.updateOne({ loc }, { $set: { upd } });
  console.log(result);
}
read();
// updateOne("Mango", true);
// insert();
// deleteOne( "Orange" );
