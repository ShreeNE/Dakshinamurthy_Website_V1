import { Request, Response } from 'express';
import { getGeminiAI, buildSpiritualPrompt } from '../services/gemini.service.js';

// POST /api/v1/gemini/spiritual-guide
export async function spiritualGuideHandler(req: Request, res: Response) {
  const { prompt, domain } = req.body;

  if (!prompt) {
    return res.status(400).json({ text: "Please provide a question for the Oracle." });
  }

  const ai = getGeminiAI();
  if (!ai) {
    return res.json({
      text: "The Oracle is currently meditating in silence. The GEMINI_API_KEY has not been configured in the server environment. Please set it and restart the server to enable AI-powered responses."
    });
  }

  try {
    const fullPrompt = buildSpiritualPrompt(prompt, domain || "general");
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: fullPrompt,
    });
    const text = response.text || "The Oracle contemplates in silence...";
    res.json({ text });
  } catch (err: any) {
    console.error("[Gemini Controller] Error:", err.message);
    res.json({
      text: "The cosmic channels experienced interference. The Oracle suggests looking within for answers while the connection is restored."
    });
  }
}
