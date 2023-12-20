import { getCollection } from "@/util/database";

const collectionName = "newsletter";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const collection = await getCollection(collectionName);
  const members = await collection.find().sort({ _id: -1 }).toArray();
  console.log("members", members);

  res.status(200).json({ message: "ok", members: members });
}
