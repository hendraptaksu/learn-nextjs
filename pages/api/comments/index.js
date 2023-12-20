import { getCollection } from "@/util/database";

const collectionName = "comments";

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return createComment(req, res);
    case "GET":
      return getComments(req, res);
    default:
      return res.status(405).json({
        message: "Method Not Allowed",
      });
  }
}

async function createComment(req, res) {
  const { email, name, comment, eventId } = req.body;

  if (!email || !name || !comment || !eventId) {
    return res.status(400).json({ message: "input validation failed." });
  }

  const collection = await getCollection(collectionName);
  const newComment = { eventId, email, name, comment };
  console.log("nc", newComment);
  await collection.insertOne(newComment);

  return res.status(200).json({ message: "success", comment: newComment });
}

async function getComments(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const eventId = req.query.eventId;

  const filter = {};
  if (eventId) {
    filter.eventId = eventId;
  }
  // get comments from db
  const collection = await getCollection(collectionName);
  const comments = await collection.find(filter).sort({ _id: -1 }).toArray();

  return res.status(200).json({ message: "success", comments: comments });
}
