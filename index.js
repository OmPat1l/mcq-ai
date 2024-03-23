import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
async function geminiTextPrompt(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  return text;
}

async function geminiTextPromptDriver() {
  let ans = await geminiTextPrompt("prompt");
  return ans;
}
export { geminiTextPrompt, geminiTextPromptDriver };
// export { geminiTextPrompt };
