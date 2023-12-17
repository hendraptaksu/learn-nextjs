import { getFeedbacks } from "@/util/feedback";

// This api return list of feedbacks. Feedbacks are loaded from a JSON file.
// Only support GET method.
export default function handler(req, res) {
  if (req.method !== "GET") {
    // If method is not GET, return 405 error
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  // load feedbacks data from file
  // const feedbacksJson = fs.readFileSync(
  //   path.join(process.cwd(), "data", "feedback.json"),
  //   "utf8",
  // );
  const feedbacksJson = getFeedbacks();
  const feedbacks = JSON.parse(feedbacksJson);

  return res.json({ feedbacks: feedbacks });
}
