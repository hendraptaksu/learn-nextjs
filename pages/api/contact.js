import { getCollection } from "@/util/database";

const collectionName = "messages";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Invalid input.",
    });
  }

  // TODO: add error handling later
  const collection = await getCollection(collectionName);
  const newMessage = { email, name, message };
  await collection.insertOne(newMessage);

  return res.status(201).json({ message: "Message stored", data: newMessage });
}
