// Secure API configuration - all calls go through backend
export interface APIResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Use backend API for all AI requests
export async function callAI(
  input: string,
  provider: 'openai' | 'openrouter' = 'openai'
): Promise<APIResponse> {
  try {
    console.log('🤖 Making AI request via backend...');
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input,
        provider
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ AI response received');
    
    return {
      success: true,
      data
    };
  } catch (error) {
    console.error('❌ AI request failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Search function using backend API
export async function performSearch(query: string): Promise<APIResponse> {
  try {
    console.log('🔍 Performing search via backend...');
    
    const response = await fetch('/api/search', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Search completed');
    
    return {
      success: true,
      data
    };
  } catch (error) {
    console.error('❌ Search failed:', error);
    return {
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Legacy compatibility - redirect to new API
export const apiConfig = {
  openRouter: { baseUrl: '/api', key: '' },
  openAI: { baseUrl: '/api', key: '' },
  anthropic: { baseUrl: '/api', key: '' }
};

export async function callOpenRouter(
  model: string,
  messages: ChatMessage[]
): Promise<APIResponse> {
  const input = messages.map(m => m.content).join('\n');
  return callAI(input, 'openrouter');
}

export async function callOpenAI(
  model: string, 
  messages: ChatMessage[]
): Promise<APIResponse> {
  const input = messages.map(m => m.content).join('\n');
  return callAI(input, 'openai');
}

export async function processUniversalRequest(request: {
  service: string;
  prompt: string;
  model?: string;
}): Promise<APIResponse> {
  return callAI(request.prompt, 'openai');
}

export default {
  callAI,
  performSearch,
  callOpenRouter,
  callOpenAI,
  processUniversalRequest
};