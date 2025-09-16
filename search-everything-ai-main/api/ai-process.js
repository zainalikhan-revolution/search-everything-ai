// src/pages/api/ai-process.js
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { feature, prompt } = req.body;
    
    if (!feature || !prompt) {
      return res.status(400).json({ error: 'Feature and prompt are required' });
    }

    // Get OpenAI API key from environment variables
    const openaiApiKey = process.env.OPENAI_API_KEY;
    
    if (!openaiApiKey) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    // Prepare different prompts based on feature
    const systemPrompts = {
      code: `You are an expert programmer. Generate clean, efficient code based on the user's request. Include comments and explanations.`,
      text: `You are a professional content writer. Create engaging, well-structured content based on the user's request.`,
      analysis: `You are a data analyst. Provide detailed analysis and insights based on the user's request.`,
      image: `You are an AI image generation prompt engineer. Create a detailed image generation prompt based on the user's request.`,
      chat: `You are a helpful AI assistant. Provide comprehensive and accurate responses.`,
      translate: `You are a professional translator. Provide accurate translations while maintaining context and cultural relevance.`
    };

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompts[feature] || systemPrompts.chat
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      
      if (response.status === 429) {
        return res.status(429).json({ 
          error: 'API quota exceeded. Please check your OpenAI billing and try again later.' 
        });
      }
      
      return res.status(response.status).json({ 
        error: errorData.error?.message || 'OpenAI API error' 
      });
    }

    const data = await response.json();
    const result = data.choices[0]?.message?.content || 'No response generated';

    return res.status(200).json({ 
      result: result,
      feature: feature,
      success: true 
    });

  } catch (error) {
    console.error('API Route Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error: ' + error.message 
    });
  }
}
