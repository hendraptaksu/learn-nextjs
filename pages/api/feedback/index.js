import { addFeedback, getFeedbacks } from "@/util/feedback";

// Route: api/feedback
export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return get(req, res);
    case "POST":
      return post(req, res);
    default:
      return res.status(405).json({
        message: "Method Not Allowed",
      });
  }
}

function get(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const feedbacks = getFeedbacks();
  return res.json({ feedbacks: feedbacks });
}

function post(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const { email, feedback } = req.body;

  if (!email || !feedback) {
    return res.status(400).json({ message: "Invalid email or feedback." });
  }

  const createdFeedback = addFeedback({ email: email, feedback: feedback });

  return res.status(201).json({ message: "Created", data: createdFeedback });
}
