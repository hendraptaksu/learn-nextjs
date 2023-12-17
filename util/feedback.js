import fs from "fs";
import path from "path";

/**
 * Get feedbacks from a JSON file
 * @returns {string} feedbacks json string
 */
export function getFeedbacks() {
  const feedbacksJson = fs.readFileSync(
    path.join(process.cwd(), "data", "feedback.json"),
    "utf8",
  );
  return feedbacksJson;
}
