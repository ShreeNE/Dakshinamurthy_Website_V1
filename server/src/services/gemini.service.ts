import { GoogleGenAI } from '@google/genai';

let ai: GoogleGenAI | null = null;

export function getGeminiAI(): GoogleGenAI | null {
  if (ai) return ai;
  
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn('[Gemini Service] GEMINI_API_KEY not found in environment. Oracle will be unavailable.');
    return null;
  }

  ai = new GoogleGenAI({ apiKey });
  return ai;
}

export function buildSpiritualPrompt(userPrompt: string, domain: string): string {
  return `You are the Cosmic Oracle of Dakshinaasya Darshini, a deeply knowledgeable spiritual guide rooted in Advaita Vedanta, the teachings of Sri Adi Shankaracharya, sacred geometry, meditation science, and ancient Indian philosophy.

The user's domain context is: "${domain}".

Respond to the following inquiry with profound wisdom, practical guidance, and references to sacred texts where appropriate. Be poetic yet precise. Use a reverent and mystical tone.

User's inquiry: "${userPrompt}"

Please provide a thoughtful, multi-paragraph response that weaves together ancient wisdom with practical understanding.`;
}
