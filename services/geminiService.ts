
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Updated the history type to use { text: string }[] instead of the tuple [{ text: string }] 
// to resolve type incompatibility in AIChat.tsx (line 34).
export const chatWithAI = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Always create a new instance right before making an API call to ensure it uses the latest API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Using 'gemini-3-flash-preview' for basic text chat tasks.
  // SYSTEM_INSTRUCTION is provided via the config.systemInstruction parameter.
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      ...history,
      { role: 'user', parts: [{ text: message }] }
    ],
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      topP: 0.9,
    }
  });

  // The GenerateContentResponse features a text property that directly returns the output string.
  return response.text;
};
