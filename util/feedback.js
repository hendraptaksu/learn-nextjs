import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "feedback.json");

/**
 * Get feedbacks from a JSON file
 * @returns {{id: string, email: string, feedback:string}[]} array of feedback
 */
export function getFeedbacks() {
  const feedbacksJson = fs.readFileSync(filePath, "utf8");
  const feedbacks = JSON.parse(feedbacksJson);
  return feedbacks;
}

/**
 * Get feedback by id
 * @param {string} id feedback id to look for
 * @returns {{id: string, email: string, feedback:string}} feedback object
 */
export function getFeedbackById(id) {
  const feedbacks = getFeedbacks();
  return feedbacks.find((f) => f.id === id);
}

/**
 * Append feedback to JSON file.
 * @param {{email: string, feedback: string}} feedbackData
 */
export function addFeedback(feedbackData) {
  const feedbacksJson = fs.readFileSync(filePath, "utf8");
  const feedbacks = JSON.parse(feedbacksJson);
  const newFeedback = { id: new Date().toISOString(), ...feedbackData };
  feedbacks.push(newFeedback);
  fs.writeFileSync(filePath, JSON.stringify(feedbacks));

  return newFeedback;
}
