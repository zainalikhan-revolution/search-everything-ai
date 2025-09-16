// src/pages/api/generate-code.js - CREATE OR UPDATE THIS FILE

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, type = 'code' } = req.body;

  // Validate input
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // Get OpenAI API key
    const openaiKey = process.env.OPENAI_API_KEY;
    
    if (!openaiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Create system prompt based on type
    const systemPrompts = {
      code: 'You are an expert programmer. Generate clean, working code with comments. Return only the code without explanations.',
      react: 'You are a React expert. Generate clean React components with proper hooks and styling.',
      python: 'You are a Python expert. Generate clean, efficient Python code with proper imports.',
      javascript: 'You are a JavaScript expert. Generate modern ES6+ JavaScript code.',
    };

    const systemPrompt = systemPrompts[type] || systemPrompts.code;

    // Make OpenAI API call
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ],
        max_tokens: 2000,
        temperature: 0.3,
      }),
    });

    // Parse response
    const data = await response.json();

    // Handle API errors
    if (!response.ok) {
      console.error('OpenAI API error:', data);
      
      if (data.error?.code === 'insufficient_quota') {
        return res.status(429).json({ 
          error: 'API quota exceeded. Please add billing to your OpenAI account at platform.openai.com/account/billing' 
        });
      }
      
      return res.status(response.status).json({ 
        error: data.error?.message || 'API request failed' 
      });
    }

    // Extract generated code
    const generatedCode = data.choices[0]?.message?.content || '';
    
    if (!generatedCode) {
      throw new Error('No code generated');
    }

    // Return success response
    return res.status(200).json({ 
      code: generatedCode,
      provider: 'openai',
      model: 'gpt-3.5-turbo'
    });

  } catch (error) {
    console.error('Code generation failed:', error);
    
    return res.status(500).json({ 
      error: error.message || 'Code generation failed',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
