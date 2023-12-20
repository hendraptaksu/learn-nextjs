import { getFeedbackById } from "@/util/feedback";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const feedback = getFeedbackById(req.query.feedbackId);
  if (!feedback) {
    return res.status(401).json({ message: "not found" });
  }

  return res.status(200).json({ message: "ok", data: feedback });
}
