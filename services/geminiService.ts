
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export const chatWithAI = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Check if we are running on the deployed Netlify site
  const isProduction = window.location.hostname.includes('netlify.app');

  if (isProduction) {
    try {
      // Call our own secure backend function instead of the Google API directly
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, history })
      });
      
      if (!response.ok) throw new Error('Proxy request failed');
      
      const data = await response.json();
      return data.text;
    } catch (error) {
      console.error('Secure proxy failed, checking fallback...', error);
      // Fallback logic continues below if proxy fails
    }
  }

  // --- Development / Preview Fallback ---
  // If we are on localhost or the proxy failed, use the direct SDK 
  // (This ensures your local preview here still works!)
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
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

  return response.text;
};
