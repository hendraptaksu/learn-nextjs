import { getCollection } from "@/util/database";

const collectionName = "newsletter";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed",
    });
  }

  const email = req.body.email;
  if (!email || email.trim() === "") {
    return res.status(400).json({ error: "bad input." });
  }

  const collection = await getCollection(collectionName);
  const newMember = {
    email: email,
  };
  await collection.insertOne(newMember);

  return res.status(200).json({ message: "success", member: newMember });
}
